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
        console.log(game)
        let placedTokens = {}
        for (let i = 1; i<=game.boardSize; i++)
            placedTokens[i]={}
        this.state={
            tokens:game.availableTokens,
            boardSize:game.boardSize,
            height:null,
            placedTokens:placedTokens
        }
    }

    onTokenRelease=(e,object)=>{
        if (e.target.id.toLowerCase().indexOf('tile')!=-1){
            let newTokens = {}
            for (let x in this.state.placedTokens){
                newTokens[x]={...this.state.placedTokens[x]}
            }
            let id = e.target.id.split(' ')
            newTokens[id[1]][id[2]]=object
            this.setState({placedTokens:newTokens},()=>console.log(this.state))
        }
    }

    onTokenMove=(e,object)=>{}

    componentDidMount(){ this.checkHeight(); window.addEventListener('resize',()=>{this.checkHeight()})}
    
    componentDidUpdate(){ this.checkHeight(); }
    
    checkHeight(){
         let height = ReactDOM.findDOMNode(this).offsetHeight;
         if (this.state.height !== height ) {
            this.setState({ height: height })
        }
        console.log('create')
    }
    
    render(){ return(
        <div style={{height:'100%',width:'100%'}}>
            <div className={`${Styles.container}`} style={this.state.height?{gridTemplateColumns:`${this.state.height}px auto`,height:`100%!important`,borderRadius:'5px'}:{gridTemplateColumns:'auto auto',height:'100%'}}>
            <br/>
                <GridContainer size={this.state.boardSize} className={Styles.GridContainer} id={Styles.GridContainer} style={{height:this.state.height}}/>
                <TokenList tokens={this.state.tokens} className={Styles.TokenList} onTokenRelease={this.onTokenRelease}/>
            </div>
        </div>
    )}
}

export default CreatePage