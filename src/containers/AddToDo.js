import React, {Component} from "react"
import {connect} from "react-redux"
import {StyledButton, AddToDoContainer} from "./styled"
import {addToDo} from "../store/actions"

class AddToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      toggleInput: false
    }
  }

  getIntialData = () => {
    this.setState({input: ''})
  }

  handleChange = (event) => {
    this.setState({input: event.target.value})
  }

  handleSubmit = () => {
    if (!this.state.input) return
    this.props.dispatch(addToDo(this.state.input, this.props.listId))
    this.getIntialData()
    this.setState({toggleInput: false})
  }

  handleDisplayInput = () => {
    this.setState({toggleInput: true})
  }

  render() {
    return (
      <AddToDoContainer>
        {this.state.toggleInput && <div>
          <input value={this.state.input} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Add</button>
        </div>}
        {!this.state.toggleInput && <StyledButton onClick={this.handleDisplayInput}>Add a to do </StyledButton>}
      </AddToDoContainer>
    )
  }
}


export default connect()(AddToDo)
