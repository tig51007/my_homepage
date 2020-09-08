import React from "react";
import axios from "axios";
import "./Home.css";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
//import Game from "../components/Game";





class Home extends React.Component{
  state={
    isLoading: false,
    myInfo:[],
    myMetch:[],
    myGame:[],
    chamImg:[],
    winFail:[],
    
  };
  
 
  
 

  
  
  


componentDidMount(){
  
  //일단 api 받기용
  fetch('api')
            .then(res=>res.json())
            .then(myData=>this.setState({myInfo: myData}))
  fetch('api/lol')
            .then(res=>res.json())
            .then(metchData=>this.setState({myMetch: metchData[0]}))
  fetch('api/lol3')               
            .then(res=>res.json())
            .then(gameData=>this.setState({myGame:  gameData}))
  fetch('api/lol5')               
            .then(res=>res.json())
            .then(winData=>this.setState({winFail:  winData}))
            
           
  
}
  render(){ 
    
    
    
    const {isLoading,myInfo,myMetch,myGame,chamImg,winFail}= this.state;
   
    const style = {
 
      backgroundColor : 'red',
      
      
 
    }
    const style2 = {
 
      backgroundColor : 'blue',
      
      
 
    }
    var imE=[];
   for(var i=0;i<20;i++){
   imE[i]={game:myGame[i],winFail:winFail[i]};
   }
   console.log(imE);
   console.log(myGame)
    return <section className ="container">

      {isLoading
       ? <div className="loader" >
         <span className = "loader_text">로딩중...</span>
         <div></div>
       </div>

       :(<body>
         
         
         
        
        
       <div className="js-weather">
       {myInfo.name}
       
   </div>
   <div >
     포지션: {myMetch.lane}
     
     </div>
     {imE.map(game=> (
                        game.winFail=="Win"?
                        <div className="match" >
                            <div className="championInfo">
                              <img className="championImg" src={"https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/"+game.game.img+""}/>
                              <div className="championName">{game.game.name}</div>
                              
                            </div>
                        </div>:
                        <div className="match" style={style}>
                        <div className="championInfo">
                          <img className="championImg" src={"https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/"}/>
                          <div className="championName"></div>
                          
                        </div>
                        </div>
     
     ))}
     
     
  
    
   
   </body>)}
      </section>
}
}

export default Home;