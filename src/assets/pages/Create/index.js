import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import GridContainer from 'Components/GridContainer'
import TokenList from 'Components/TokenList'
import Actions from 'Actions/'
import Styles from './create.css'

class CreatePage extends Component {
    constructor (props) {
        super(props)
        let game = Actions.getGame
        let placedTokens = {}
        for (let i = 1; i<=game.boardSize; i++)
            placedTokens[i]={}
        this.state={
            tokens:game.availableTokens,
            boardSize:game.boardSize,
            height:null,
            placedTokens:placedTokens
        }
        this.dragEvents={
            start: function(e){ e.preventDefault() },
            over: function(e){ e.preventDefault() },
            drop: function(e){
                e.preventDefault(); 
                let tokenID = e.dataTransfer.getData('text/html').split(' ').find(string=>(string.indexOf('id')!=-1)).replace(/\D/g,'')  
                let coordinates = e.target.id.replace('tile ','').split(' ')
                this.placeToken(tokenID, coordinates)
            }.bind(this)
        }
    }

    getPlacedTokens(){
        let newTokens = {}
        for (let k in this.state.placedTokens)
            newTokens[k]={...this.state.placedTokens[k]}
        return newTokens
    }

    placeToken(id, coord){
        let placedTokens = this.getPlacedTokens()
        placedTokens[coord[0]][coord[1]]=this.state.tokens[id]
        this.setState({placedTokens:placedTokens})
    }

    componentDidMount(){ this.checkHeight(); window.addEventListener('resize',()=>{this.checkHeight()}) }
    
    componentDidUpdate(){ this.checkHeight(); }
    
    checkHeight(){
         let height = ReactDOM.findDOMNode(this).offsetHeight;
         if (this.state.height !== height ) {
            this.setState({ height: height })
        }
    }
    
    render(){ return(
        <div style={{height:'100%',width:'100%'}}>
            <div className={`${Styles.container}`} style={this.state.height?{gridTemplateColumns:`${this.state.height}px auto`,height:`100%!important`,borderRadius:'5px'}:{gridTemplateColumns:'auto auto',height:'100%'}}>
            <br/>
                <GridContainer size={this.state.boardSize} className={Styles.GridContainer} id={Styles.GridContainer} style={{height:this.state.height}} dragEvents={this.dragEvents} placedTokens={this.state.placedTokens}/>
                <TokenList tokens={this.state.tokens} className={Styles.TokenList} dragEvents={this.dragEvents}/>
            </div>
        </div>
    )}
}

export default CreatePage