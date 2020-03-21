import React, {Component} from "react"
import {connect} from "react-redux"
// import {StyledButton} from "./styled"
import {addToDo} from "../store/actions"

class AddToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  getIntialData = () => {
    this.setState({input: ''})
  }
  
  handleChange = (event) => {
    this.setState({input: event.target.value})
  }

  handleSubmit = () => {
    if(!this.state.input) return
    this.props.dispatch(addToDo(this.state.input, this.props.listId))
    this.getIntialData()
  }

  render() {
    return (
      <>
        <div>
          <input value={this.state.input} onChange={this.handleChange} />
        </div>
        <button onClick={this.handleSubmit}>Add a to do </button>
      </>
    )
  }
}


export default connect()(AddToDo)
