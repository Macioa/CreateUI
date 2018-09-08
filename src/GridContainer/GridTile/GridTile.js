import React, {Component} from 'react'
import GridContainer from '../GridContainer';

class GridTile extends Component{
    constructor(props){
        super(props)
        let color = ((props.x+props.y)%2)?'white':'black'
        let style = props.style||{}
        this.state={
            x:props.x,
            y:props.y,
            color:color, 
            style: Object.assign(style,{
                height: '100%',
                width: '100%',
                margin: 'auto',
                backgroundColor: color, 
                gridColumnStart: props.x, 
                gridColumnEnd: props.x+1, 
                gridRowStart: props.y,
                gridRowEnd: props.y+1,
            })}
    }
    render(){ return (
         <div style={this.state.style}/>
    )}
}

export default GridTile