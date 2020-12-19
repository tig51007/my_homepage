import React, { useState } from "react";
import axios from "axios";
import "./Home.css";
import PropTypes from "prop-types";

import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';

import Search from "./Search";
var count=0;
var weatherB;
function error(p){
  console.log(p);
}
const API_KEY="1a8366f67b51af6cbd9096a643bb1df3";


class Home extends React.Component{
  static propTypes={
    cookies:instanceOf(Cookies).isRequired
  }
  state={
  clock:`0:0`,
  weather:``
  
  };
  constructor(props) {
    super(props);
 
    const { cookies } = props;
    this.state = {
//쿠키를 가져옵니다.
      name: cookies.get('name') || '아직 검색한 소환사가 없습니다'
      
    };
  }
  
  
  askForCoord=()=>{
    navigator.geolocation.getCurrentPosition(async(position)=>{
      console.log(position)
    const lat=position.coords.latitude;
     const lon=position.coords.longitude;
     const weatherA=await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
      const json=weatherA.data; 
      console.log(json)
        const temperature = json.main.temp;
        const place = json.name;
        const country = json.sys.country;
        const weatherMain = json.weather[0].main;
        console.log(weatherA)
        this.setState({weather:`현재기온: ${Math.floor(temperature)}\n지역: ${place}\n나라: ${country}\n날씨: ${weatherMain}`})
    },error);
  }
  
    
      
  
  
   getTime=()=>{
     
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    this.setState({clock:`${hours > 12 ? `오후 \n${hours-12}` : `오전 \n${hours}`}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds<10 ?`0${seconds}` : seconds}`})//삼항연산자.. 작은 if문
  
  }


componentDidMount(){

  this.getTime()
  setInterval(this.getTime, 1000);
  console.log(this.props.history.href);
  this.askForCoord()

}
////
handleChange=(e)=> {
  const { cookies } = this.props;
  this.setState({ value: e.target.value });
  
  cookies.set('name',e.target.value,{path:'/'});
  
}

//
  render(){ 
    
  const {clock,weather,test}=this.state
  const { cookies } = this.props;

  
    return <body className ="container">


<form onSubmit={this.handleSubmit}>
<input  type="text"value={this.state.value}onChange={this.handleChange} onClick={this.handleClick}/>

        <Link to={`/search/${this.state.value}`} >
    
        <input type="submit" value="소환사를 입력하세요"/>
        </Link>
        </form>
<div class="js-clock">
            <h1>{clock}</h1>
        </div>
        <div>{weather}</div>
        <div>최근검색어: {this.state.name}</div>
        <div class="plus-box-container">
        <div class="box-container">
          <a class="box" target="_blank" href={this.props.history.href ='http://www.google.com'}>구글</a>
          <a class="box" target="_blank" href={this.props.history.href ='https://www.youtube.com/'}>유튜브</a>
          <a class="box" target="_blank" href={this.props.history.href ='https://www.op.gg/'}>op.gg</a>
          <a class="box" target="_blank" href={this.props.history.href ='https://forum.netmarble.com/sk2'}>세나2 포럼</a>
          <a class="box" target="_blank" href={this.props.history.href ='https://www.kmu.ac.kr/'}>계명대학교</a>
        </div>
        
        </div>

  </body>
      
}
}

export default withCookies(Home);
