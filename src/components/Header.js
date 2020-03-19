import React, {PureComponent} from 'react';
import moment from "moment"

class Header extends PureComponent {
  render(){
     const date = moment().format('dddd D MMMM')
    return(
      <div> TO DO List {date}</div>

    )
  }
}

export default Header
