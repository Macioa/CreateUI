import React from 'react'
import GridTile from './GridTile/GridTile'
import PropTypes from 'prop-types'
import Style from './GridContainer.css'

const GridContainer = (props) => {
    let styleSize = ''
    for (let i =0; i< props.size; i++) styleSize+='auto '
    let tileArray = []
    for (let x = 1; x<=props.size; x++)
        for (let y = 1; y<=props.size; y++)
            tileArray.push(<GridTile x={x} y={y} key={`${x}-${y}`}/>)
    return (
        <div id='GridContainer' className={`GridContainer ${Style.GridContainer}`} style={Object.assign(Object.assign({},props.style||{}),{
                display:'grid', 
                gridTemplateColumns: styleSize, 
                gridTemplateRows: styleSize,
        })}>
        {tileArray}
        </div>
    )
}

GridContainer.proptypes = { size: PropTypes.number.isRequired }

export default GridContainer