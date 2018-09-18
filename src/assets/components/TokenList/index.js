import React from 'react'
import PropTypes from 'prop-types'
import DraggableDiv from 'Components/DraggableDiv'
import Styles from './TokenList.css'

const TokenList = (props) => {
    console.log(props.tokens)
    console.log(props.tokens.map((token)=>{return <li>{token.name}</li>}))
    return (
        <div className = 'container'>
            <h4>Tokens</h4>
            <ul>
                { props.tokens.map((token)=>{return <li><DraggableDiv style={{height:'25px',width:'25px',backgroundColor:'red'}}/>{token.name}</li>}) }
            </ul>

        </div>
    )
}

TokenList.proptypes = { tokens: PropTypes.array.isRequired }
export default TokenList