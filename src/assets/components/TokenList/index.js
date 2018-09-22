import React from 'react'
import PropTypes from 'prop-types'
import Styles from './TokenList.css'

const TokenList = (props) => {
    return (
        <div className = 'container'>
            <ul>
                <h4>Tokens</h4>
                { Object.values(props.tokens).map((token,i)=>{ return <li key={token.id}>{token.name}<br/><img                            className={Styles.token} 
                            src={token.image}
                            id={`token-${token.id}`}
                            draggable={true}
                            style={{height:'25px',width:'25px'}}
                            onDrag={props.dragEvents.start}
                /></li> }) }    
            </ul>

        </div>
    )
}

TokenList.proptypes = { tokens: PropTypes.array.isRequired }

export default TokenList