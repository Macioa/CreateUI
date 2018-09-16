import React from 'react'
import PropTypes from 'prop-types'
import Style from './GridTile.css'

const GridTile = (props) => {
    return (<div className={`tile ${((props.x+props.y)%2)?Style.black:Style.white} ${Style.tile}`}
        style={Object.assign(Object.assign({}, props.style||{}),{
            gridColumnStart: props.x, 
            gridColumnEnd: props.x+1, 
            gridRowStart: props.y,
            gridRowEnd: props.y+1,
        })}
    />)
}

GridTile.proptypes = { x: PropTypes.number.isRequired, y: PropTypes.number.isRequired }

export default GridTile