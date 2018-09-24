import React from 'react'
import GridTile from './GridTile'
import PropTypes from 'prop-types'
import Style from './GridContainer.css'
import TileStyle from './GridTile/GridTile.css'

const GridContainer = (props) => {
    let tileArray = [], tokenArray = []
    for (let x = 1; x<=props.size; x++)
        for (let y = 1; y<=props.size; y++)
            tileArray.push(<GridTile x={x} y={y} key={`${x}-${y}`} dragEvents={props.dragEvents} />)
    let cellSize = (document.getElementById('GridContainer'))?document.getElementById('GridContainer').offsetWidth/props.size:0
    if (props.placedTokens)
        for (let x in props.placedTokens){
            for (let y in Object.assign({},props.placedTokens[x])){
                tokenArray.push(<div className={TileStyle.tile} style={{
                                        gridColumn: x+'/'+x, 
                                        gridRow: y+'/'+y,
                                        }}
                                        key={`${props.placedTokens[x][y].id}-${x}-${y}`}
                                    >
                                    <img 
                                        src={props.placedTokens[x][y].image}
                                        style={{
                                            zIndex: '10',
                                            width:'100%',
                                            height:'100%',
                                            
                                        }}
                                        key={`img${props.placedTokens[x][y].id}-${x}-${y}`}
                                    />
                                </div>)
            }
        }
    return (
        <div id='GridContainer' className={`GridContainer ${props.className} ${Style.GridContainer}`} style={Object.assign(Object.assign({},props.style||{}),{
                display:'grid', 
                gridTemplateColumns: `repeat(${props.size},1fr)`,
                gridTemplateRows: `repeat(${props.size},1fr)`,
                minHeight:'0',
                minWidth:'0',
                overflow:'hidden'
        })}>
        {tileArray}
        {tokenArray}
        </div>
    )
}

GridContainer.proptypes = { size: PropTypes.number.isRequired, placedTokens: PropTypes.array}

export default GridContainer