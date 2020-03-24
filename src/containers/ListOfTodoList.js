import React, {Component} from "react"
import {connect} from "react-redux"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList} from '@fortawesome/fontawesome-free-solid'

import SelectedList from "../containers/SelectedList"
import {LeftDiv, Image, ProfileContainer, Name, ListContainer, ListName, AppContainer, RightDiv} from "./styled"
import img_avatar from "../images/img_avatar.png"

class ListOfTodoList extends Component {

  render() {
    const {listOfLists} = this.props
    return (
      <AppContainer>
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
        <RightDiv>
          <SelectedList selectedList={listOfLists[0]} />
        </RightDiv>
      </AppContainer>
    )
  }
}

const mapStateToProps = state => ({
  listOfLists: state.listOfLists
})

export default connect(mapStateToProps)(ListOfTodoList)
