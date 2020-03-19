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

  handleChange = (event) => {
    this.setState({input: event.target.value})
  }


  render() {
    console.log("props in container", this.props)
    return (
      <>
        <div>
          <input value={this.state.input} onChange={this.handleChange} />
        </div>
        <button onClick={() => this.props.dispatch(addToDo(this.state.input))}>Add a to do </button>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(AddToDo)
