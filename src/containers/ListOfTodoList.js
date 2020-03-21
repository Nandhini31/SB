import React, {Component} from "react"
import {connect} from "react-redux"
import SelectedList from "../containers/SelectedList"
import {LeftDiv} from "./styled"

class ListOfTodoList extends Component {

  render() {
    const {listOfLists} = this.props
    return (
      <>
        <LeftDiv>{listOfLists[0].name}</LeftDiv>
        <SelectedList selectedList={listOfLists[0]} />
      </>
    )
  }
}

const mapStateToProps = state => ({
  listOfLists: state.listOfLists
})

export default connect(mapStateToProps)(ListOfTodoList)
