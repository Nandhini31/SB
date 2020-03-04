import React, {Component} from 'react';
import moment from "moment"
class Header extends Component{
  render(){
    const date = moment().format('dddd D MMMM')
    console.log(date)
    return(
      <div>
        <h1>Team To Do List</h1>
        <h3>{date}</h3>
      </div>
    )
  }
}

export default  Header
