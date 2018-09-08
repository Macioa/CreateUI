import React, {Component} from 'react'
import GridContainer from '../GridContainer';

class GridTile extends Component{
    constructor(props){
        super(props)
        let color = ((props.x+props.y)%2)?'white':'black'
        let style = props.style||{}
        let defaultZ = style.zIndex||0
        this.state={
            x:props.x,
            y:props.y,
            color:color,
            defaultZ: defaultZ, 
            style: Object.assign(style,{
                height: '100%',
                width: '100%',
                margin: 'auto',
                backgroundColor: color, 
                gridColumnStart: props.x, 
                gridColumnEnd: props.x+1, 
                gridRowStart: props.y,
                gridRowEnd: props.y+1,
                transition: 'width height 3s',
                zIndex: defaultZ,
                overflow: 'visible'
            })
        }
    }
    handleHoverStart=()=>{ 
        console.log('hover')
        this.setState({style:Object.assign(Object.assign({},this.state.style),{height: '110%', width: '110%', zIndex:this.state.defaultZ+1})})    
    }
    handleHoverEnd(){
        this.setState({style:Object.assign(this.state.style,{height: '100%', width: '100%' })})
    }
    render(){ return (
         <div style={this.state.style} class='tile'/>
    )}
}

export default GridTile