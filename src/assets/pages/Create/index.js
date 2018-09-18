import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import GridContainer from 'Components/GridContainer'
import TokenList from 'Components/TokenList'
import Actions from 'Actions/'
import Styles from './create.css'

class CreatePage extends Component {
    constructor (props) {
        super(props)
        this.state={tokens:Actions.getTokens,height:null}
    }
    componentDidMount(){ this.checkHeight(); window.addEventListener('resize',()=>{this.checkHeight()})}
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
                <GridContainer size={8} className={Styles.GridContainer} id={Styles.GridContainer} style={{height:this.state.height}}/>
                <TokenList tokens={this.state.tokens} className={Styles.TokenList}/>
            </div>
        </div>
    )}
}

export default CreatePage