import React, {Component} from 'react'
import GridTile from './GridTile/GridTile'

class GridContainer extends Component{
    constructor(props){
        super(props)
        let styleSize = ''
        for (let i =0; i< props.size; i++) styleSize+='auto '
        let style = props.style||{}
        console.log(styleSize)
        this.state={
            size:props.size, 
            styleSize: styleSize,
            style: Object.assign(style, {
                margin:'auto', 
                display:'grid', 
                gridTemplateColumns: styleSize, 
                gridTemplateRows: styleSize, 
                justifyItems: 'center',
                borderStyle:'solid'})
        }
    }
    constructTiles(){
        let tileArray = []
        for (let x = 1; x<=this.state.size; x++)
            for (let y = 1; y<=this.state.size; y++)
                tileArray.push(<GridTile x={x} y={y} key={`${x}-${y}`}/>)
        return tileArray
    }
    render(){ return(
        <div id='GridContainer' className='GridContainer' style={this.state.style}>
        {this.constructTiles()}
        </div>
    )}
}

export default GridContainer