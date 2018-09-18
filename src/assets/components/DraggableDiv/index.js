import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Styles from './DraggableDiv.css'

class DraggableDiv extends Component {
    constructor (props){
        super(props)
        this.ref = React.createRef()
        this.onRelease = props.onRelease
        this.state={dragging:false, cloneStyle: null, showOriginal: props.showOriginal||false}
     }
     getStyle = (node) => {
            let ComputedStyle = window.getComputedStyle(node)
            //console.log(ComputedStyle)
            let diff = {}
            let root = window.getComputedStyle(document.getElementById('root'))
            for (let key in ComputedStyle)
                if (ComputedStyle[key]!==root[key])
                    if (!(key.split('-').length-1)){
                        let keyid=key.toLowerCase(); let returnVal=true
                        let ignored=['transform','origin','inlinesize','blocksize']
                        for (let ignore of ignored)
                            if (keyid.indexOf(ignore)!==-1) returnVal=false;
                        if (returnVal) diff[key]=ComputedStyle[key]
                    }
            //console.log(diff)
            return diff
        }   
    componentDidMount(){
        window.addEventListener('resize',()=>{ 
            let style = window.getComputedStyle(this.ref.current)
            if ( ( style.getPropertyValue('height')!=this.state.cloneStyle.height ) || ( style.getPropertyValue('width')!=this.state.cloneStyle.width ) )
                this.setState({cloneStyle:this.getStyle(this.ref.current)})
        })
        this.setState({ cloneStyle:this.getStyle(this.ref.current) })
    }
    shouldComponentUpdate(){ return this.state.dragging }
    updateDragLocation=(e)=>{
        let time = new Date()
        if ((time-this.renderTime)>16){
            this.setState({
                cloneStyle:{
                    ...this.state.cloneStyle, 
                    top: e.clientY-this.state.cloneStyle.height.replace('px','')/2+'px', 
                    left: e.clientX-this.state.cloneStyle.width.replace('px','')/2+'px'
                }
            })
            this.renderTime=time;
        }
    }
    handleStartDrag=(e)=>{
        this.setState({dragging:true})
        document.addEventListener('mousemove', this.updateDragLocation)
        document.addEventListener('mouseup', this.handleStopDrag)
        this.renderTime= new Date()
    }
    handleStopDrag=(e)=>{
        document.removeEventListener('mousemove', this.updateDragLocation)
        document.removeEventListener('mouseup', this.handleStopDrag)
        this.setState({dragging:false})
        if (this.onRelease)
            this.onRelease(e, this.props.object)
    }
    render(){
        return(
            <div className={`dragContainer ${this.props.className}`} style={{width:'100%',height:'100%'}}>
                {(this.state.showOriginal||!this.state.dragging)?
                    <div 
                        className={`draggableDiv ${this.props.className}`} 
                        draggable="true" ref={this.ref} 
                        onDragStart={this.handleStartDrag} 
                        style={this.props.style}
                    />
                :''}
                {this.state.dragging?
                    <div id="dragClone" 
                        className={`dragClone ${Styles.dragClone}`} 
                        style={this.state.cloneStyle} 
                    />
                :''}
            </div>
        )
    }
}

DraggableDiv.proptypes = { onRelease: PropTypes.func, showOriginal: PropTypes.bool, object: PropTypes.object }

export default DraggableDiv