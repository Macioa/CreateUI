import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Styles from './DraggableDiv.css'

class DraggableDiv extends Component {
    constructor (props){
        super(props)
        this.ref = React.createRef()
        this.onRelease = props.onRelease
        var style = Object.freeze(props.style||{})
        Object.defineProperty(this, 'style',{get:function(){return Object.assign({}, style)}})
        this.state={dragging:false, cloneStyle: this.style, showOriginal: props.showOriginal||false}
     }
    componentDidMount(){
        this.setState({ draggin:false,cloneStyle:Object.assign(this.style,{width: this.ref.current.offsetWidth, height: this.ref.current.offsetHeight}) })
    }
    shouldComponentUpdate(){return this.state.dragging}
    updateDragLocation=(e)=>{
        this.setState({cloneStyle:Object.assign(Object.assign({},this.state.cloneStyle),{top: e.clientY-this.state.cloneStyle.height/2, left: e.clientX-this.state.cloneStyle.width/2})})
    }
    handleStartDrag=(e)=>{
        this.setState({dragging:true})
        document.addEventListener('mousemove', this.updateDragLocation)
        document.addEventListener('mouseup', this.handleStopDrag)
    }
    handleStopDrag=(e)=>{
        document.removeEventListener('mousemove', this.updateDragLocation)
        document.removeEventListener('mouseup', this.handleStopDrag)
        this.setState({dragging:false})
        console.log(e.target)
    }
    render(){
        return(
            <div className={`dragContainer`} style={!this.state.dragging?this.style:{}}>
            {(this.state.showOriginal||(!this.state.dragging))?<div className={`draggableDiv`} draggable="true" ref={this.ref} onDragStart={this.handleStartDrag} style={this.style}/>:''}
            {this.state.dragging?<div id="dragClone" className={`dragClone ${Styles.dragClone}`} style={this.state.cloneStyle}/>:''}
            </div>
        )
    }
}

DraggableDiv.proptypes = { onRelease: PropTypes.func.isRequired }

export default DraggableDiv