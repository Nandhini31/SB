import React, {Component} from "react"
import {StyledButton} from "./styled"
class AddToDo extends Component {
  constructor(props){
    super(props)
    this.state={
      items: [],
      input: '',
      isInputShown: false
    }
  }
  handleClick = () => {
    this.setState(state =>({
      isInputShown: !state.isInputShown
    }))
  }
  handleChange =(event) => {
    this.setState({input: event.target.value})
  }
  handleSubmit= () => {
    this.setState({items: [...this.state.items, this.state.input]})
  }
  render(){
    console.log(this.state.isInputShown)
    return(
      <>
        {this.state.items.map((todoItem, index) => <li>{todoItem}</li>)}
        <StyledButton onClick={this.handleClick}>Add a to do </StyledButton>
        {this.state.isInputShown && 
        (<div>
          <input value = {this.state.input} onChange = {this.handleChange}/>
          <button onClick={this.handleSubmit}>Add</button>
        </div>)}
      </>
    )
  }
}

export default AddToDo
