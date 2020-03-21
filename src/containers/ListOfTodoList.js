import React, {Component} from "react"
import {connect} from "react-redux"
import SelectedList from "../containers/SelectedList"

class ListOfTodoList extends Component {

  render() {
    const {listOfLists} = this.props
    return (
      <>
        {/* <div>{listOfLists[0].name}</div> */}
        <SelectedList selectedList={listOfLists[0]} />
      </>
    )
  }
}

const mapStateToProps = state => ({
  listOfLists: state.listOfLists
})

export default connect(mapStateToProps)(ListOfTodoList)
