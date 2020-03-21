import React, {PureComponent} from 'react';
import PropTypes from "prop-types"

class Header extends PureComponent {
  render(){
    return(
      <>
        <div>{this.props.name}</div>
        <div>{this.props.createdDate}</div>
      </>
    )
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired
}


export default Header
