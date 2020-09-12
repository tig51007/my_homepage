import React from "react";
import axios from "axios";
import "./Home.css";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Game from "../components/Game";





class Home extends React.Component{
  state={
    isLoading: false,
    myInfo:[],
    myMetch:[],
    myGame:[],
    chamImg:[],
    winFail:[],
    killDeath:[],
    myItem:[],
    otherSummon:[],
    otherChamp:[],
    spell1:[],
    spell2:[],
    tData:[],
    rankData:[]
    
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
            .then(gameData=>this.setState({myGame: gameData}))
            
  fetch('api/lol5')               
            .then(res=>res.json())
            .then(winData=>this.setState({winFail:  winData}))
  fetch('api/lol6')               
            .then(res=>res.json())
            .then(killData=>this.setState({killDeath:  killData}))
  fetch('api/lol7')               
            .then(res=>res.json())
            .then(itemData=>this.setState({myItem:  itemData}))
  fetch('api/lol8')               
            .then(res=>res.json())
            .then(summonData=>this.setState({otherSummon:  summonData})) 
  fetch('api/lol9')               
            .then(res=>res.json())
            .then(champData=>this.setState({otherChamp:  champData})) 
  fetch('api/lol10')               
            .then(res=>res.json())
            .then(mySpell=>this.setState({spell1: mySpell})) 
  fetch('api/lol11')               
            .then(res=>res.json())
            .then(mySpell=>this.setState({spell2: mySpell}))
  fetch('api/lol12')               
            .then(res=>res.json())
            .then(tData=>this.setState({tData: tData}))  
 fetch('api/myRank')               
            .then(res=>res.json())
            .then(tData=>this.setState({rankData: tData[0]}))  
            
  
}
  render(){ 
    
    
    
    const {isLoading,myInfo,myMetch,myGame,chamImg,winFail,killDeath,myItem,otherChamp,otherSummon,spell1,spell2,tData,rankData}= this.state;
   
    
   
   var sortWinFail=[];
    for(var i=0;i<20;i++){
      sortWinFail[i]={"winFail":winFail[i]};
      }
     
    var imE=[];
   for(var i=0;i<20;i++){
     
   imE[i]={...myGame[i],...sortWinFail[i],...killDeath[i],...myItem[i],...otherSummon[i],...otherChamp[i],...spell1[i],...spell2[i],...tData[i]};
   }
   
   
   
    return <section className ="container">

      {isLoading
       ? <div className="loader" >
         <span className = "loader_text">로딩중...</span>
         <div></div>
       </div>

       :(<body>
         
         <div className="backGroundTheme">
         
        
        
       <div className="myName">
       {myInfo.name}.gg
       
   </div>
   <div className="tier" >
     티어:{rankData.tier} {rankData.rank} 승:{rankData.wins} 패:{rankData.losses}
     
     </div>
     </div><div className="compoGame">
    {imE.map(game=> (
                        <Game
                        name={game.name}
                        img={game.img}
                        winFail={game.winFail}
                        kill={game.kill}
                        death={game.death}
                        assist={game.assist}
                        item0={game.item0}
                        item1={game.item1}
                        item2={game.item2}
                        item3={game.item3}
                        item4={game.item4}
                        item5={game.item5}
                        item6={game.item6}
                        summonerImg1={game[0]}
                        summonerImg2={game[1]}
                        summonerImg3={game[2]}
                        summonerImg4={game[3]}
                        summonerImg5={game[4]}
                        summonerImg6={game[5]}
                        summonerImg7={game[6]}
                        summonerImg8={game[7]}
                        summonerImg9={game[8]}
                        summonerImg10={game[9]}
                        summoner1={game.matchSummoner1}
                        summoner2={game.matchSummoner2}
                        summoner3={game.matchSummoner3}
                        summoner4={game.matchSummoner4}
                        summoner5={game.matchSummoner5}
                        summoner6={game.matchSummoner6}
                        summoner7={game.matchSummoner7}
                        summoner8={game.matchSummoner8}
                        summoner9={game.matchSummoner9}
                        summoner10={game.matchSummoner10}
                        spell1={game.spell1}
                        spell2={game.spell2}
                        time={game.gameTime}
                        mode={game.theMode}
                        
                        
                       
                        />         
                      
     
     ))}
     
     
     
  
    
     </div>
   </body>)}
      </section>
}
}

export default Home;