import React, {Component} from "react"
import {StyledButton} from "./styled"
class AddToDo extends Component {
  constructor(props){
    super(props)
    this.state={
      listOfLists: [{
        
      }],
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

  handleSubmit= (state) => {
    this.setState({items: [...this.state.items, this.state.input], isInputShown: false})
  }

  render(){
    return(
      <>
        {this.state.items.map((todoItem, index) => <li>{todoItem}</li>)}
        {this.state.isInputShown && 
        (<div>
          <input value = {this.state.input} onChange = {this.handleChange}/>
          <button onClick={this.handleSubmit}>Add</button>
        </div>)}
        <StyledButton onClick={this.handleClick}>Add a to do </StyledButton>
      </>
    )
  }
}

export default AddToDo
