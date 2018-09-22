import React from 'react'
import PropTypes from 'prop-types'
import Style from './GridTile.css'
import TokenStyle from '../../TokenList'

const GridTile = (props) => {
    return (<div className={`tile ${((props.x+props.y)%2)?Style.black:Style.white} ${Style.tile}`}
        id={`tile ${props.x} ${props.y}`}
        style={Object.assign(Object.assign({}, props.style||{}),{
            gridColumnStart: props.x, 
            gridColumnEnd: props.x+1, 
            gridRowStart: props.y,
            gridRowEnd: props.y+1,
        })}
        onDrop={props.dragEvents.drop}
        onDragOver={props.dragEvents.over}
    >
    </div>
    )
}

GridTile.proptypes = { x: PropTypes.number.isRequired, y: PropTypes.number.isRequired }

export default GridTile