import React, {Component} from "react"
import {connect} from "react-redux"
import SelectedList from "../containers/SelectedList"
import {LeftDiv, Image, ProfileContainer, Name, ListContainer, ListName} from "./styled"
import img_avatar from "../images/img_avatar.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList} from '@fortawesome/fontawesome-free-solid'

class ListOfTodoList extends Component {

  render() {
    const {listOfLists} = this.props
    return (
      <>
        <LeftDiv>
          <ProfileContainer>
            <Image src={img_avatar}/>
            <Name>Nandhini Narasimhan</Name>
          </ProfileContainer>
          <ListContainer>
            <FontAwesomeIcon icon={faList} color="#b3b3cc"/>
            <ListName>{listOfLists[0].name}</ListName>
          </ListContainer>
        </LeftDiv>
        <SelectedList selectedList={listOfLists[0]} />
      </>
    )
  }
}

const mapStateToProps = state => ({
  listOfLists: state.listOfLists
})

export default connect(mapStateToProps)(ListOfTodoList)
