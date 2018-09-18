import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Styles from './DraggableDiv.css'

class DraggableDiv extends Component {
    constructor (props){
        super(props)
        this.ref = React.createRef()
        this.onRelease = props.onRelease
        //var style = Object.freeze({...props.style})
        //Object.defineProperty(this, 'style',{get:function(){return Object.assign({}, style)}})
        this.state={dragging:false, cloneStyle: null, showOriginal: props.showOriginal||true}
     }
     getStyle = (node) => {
            let ComputedStyle = window.getComputedStyle(node)
            let diff = {}, res = {}
            let root = window.getComputedStyle(document.getElementById('root'))
            for (let key in ComputedStyle)
                if (ComputedStyle[key]!==root[key])
                    if (!(key.split('-').length-1)){
                        let keyid=key.toLowerCase(); let returnVal=true
                        let ignored=['transform','perspective','origin','inlinesize','blocksize']
                        for (let ignore of ignored)
                            if (keyid.indexOf(ignore)!==-1) returnVal=false;
                        if (returnVal) diff[key]=ComputedStyle[key]
                    }
            console.log(diff)
            return diff
        }   
    componentDidMount(){
        this.setState({ dragging:false,
                        cloneStyle:this.getStyle(this.ref.current)
        },()=>{console.log(this.state)})
        window.addEventListener('resize',()=>{ 
            if ((this.ref.current.offsetHeight!=this.state.cloneStyle.height)||(this.ref.current.offsetWidth!=this.state.cloneStyle.width))
                this.setState({cloneStyle:this.getStyle(this.ref.current)})
        })
    }
    shouldComponentUpdate(){ return this.state.dragging }
    updateDragLocation=(e)=>{
        console.log(e.clientY-this.state.cloneStyle.height.replace('px','')/2)
        console.log(this.state.cloneStyle.height)
        let time = new Date()
        if ((time-this.renderTime)>16){
            this.setState({
                cloneStyle:{
                    ...this.state.cloneStyle, 
                    top: e.clientY-this.state.cloneStyle.height.replace('px','')/2, 
                    left: e.clientX-this.state.cloneStyle.width.replace('px','')/2
                }
            }, ()=>console.log(this.state))
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
        this.onRelease(e)
    }
    render(){
        return(
            <div className={`dragContainer`} style={{width:'100%',height:'100%'}}>
            {(this.state.showOriginal||!this.state.dragging)?<div className={`draggableDiv ${this.props.className}`} draggable="true" ref={this.ref} onDragStart={this.handleStartDrag} style={this.props.style}/>:''}
            {this.state.dragging?<div id="dragClone" className={`dragClone ${Styles.dragClone}`} style={this.state.cloneStyle} />:''}
            </div>
        )
    }
}

DraggableDiv.proptypes = { onRelease: PropTypes.func.isRequired }

export default DraggableDiv