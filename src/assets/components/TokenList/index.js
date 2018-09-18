import React from 'react'
import PropTypes from 'prop-types'
import DraggableDiv from 'Components/DraggableDiv'
import Styles from './TokenList.css'

const TokenList = (props) => {
    return (
        <div className = 'container'>
            <ul>
                <h4>Tokens</h4>
                { props.tokens.map((token,i)=>{ return <li key={i}>{token.name}<DraggableDiv                            className={Styles.token} 
                            style={{backgroundImage:`url(${token.image})`}} 
                            object={token} 
                            showOriginal={true}
                            onRelease={props.onTokenRelease}/></li> }) }    
            </ul>

        </div>
    )
}

TokenList.proptypes = { tokens: PropTypes.array.isRequired, onTokenRelease: PropTypes.func.isRequired}

export default TokenList