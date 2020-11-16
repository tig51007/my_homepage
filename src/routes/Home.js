import React, { useState } from "react";
import axios from "axios";
import "./Home.css";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


import Search from "./Search";
var count=0;



class Home extends React.Component{
  
  state={
  
  };
  





componentDidMount(){

  
}
handleChange=(e)=> {
  this.setState({ value: e.target.value });
}

  render(){ 
    
  
 
    
    return <body className ="container">


<form onSubmit={this.handleSubmit}>
<input  type="text"value={this.state.value}onChange={this.handleChange}/>

        <Link to={`/search/${this.state.value}`} >
    
        <input type="submit" value="소환사를 입력하세요"/>
        </Link>
        </form>


  </body>
      
}
}

export default Home;