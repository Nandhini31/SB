import React, {PureComponent} from 'react';
import PropTypes from "prop-types"
import {HeaderContainer} from "./styled"

class Header extends PureComponent {
  render(){
    return(
      <HeaderContainer>
        <h2>{this.props.name}</h2>
        <div>{this.props.createdDate}</div>
      </HeaderContainer>
    )
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired
}


export default Header
