import React, {Component} from "react"

import Header from "../components/Header"
import AddToDo from "../containers/AddToDo"
import List from "../containers/List"
import PropTypes from "prop-types"
import {RightDiv} from "./styled"

class SelectedList extends Component {

  render() {
    const {selectedList} = this.props
    return (
      <>
        <Header name={selectedList.name} createdDate={selectedList.createdDate}/>
        <AddToDo todos={selectedList.todos} listId={selectedList.id}/>
        <List todos={selectedList.todos} listId={selectedList.id}/>
      </>
    )
  }
}

SelectedList.propTypes = {
  selectedList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    createdDate: PropTypes.string.isRequired,
    todos: PropTypes.array.isRequired
  }).isRequired
}


export default SelectedList
