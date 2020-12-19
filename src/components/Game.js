import React from "react";
import PropTypes from "prop-types";

function Game({winFail,name,img,kill,death,assist,item0,item1,item2,item3,item4,item5,item6,summoner1,summoner2,summoner3,summoner4,summoner5,summoner6,summoner7,summoner8,summoner9,summoner10,summonerImg1,summonerImg2,summonerImg3,summonerImg4,summonerImg5,summonerImg6,summonerImg7,summonerImg8,summonerImg9,summonerImg10,spell1,spell2,time,mode}){
    const style = {
 
        backgroundColor : 'lightpink',
        
        
   
      }
      const ver="10.25.1";
    return  <div className="js-game">
            <table>
                        {winFail=="Win"?
                        
                        <tr><div className="match" ><td>{mode}<br/><hr/><br/>승리<br/>{time}</td><th>
                          
                        <tr><td><div className="championInfo">
                          <td><img className="championImg" alt=""src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+img+""}/></td>
                          <td><tr><th><img className="spellImg" alt="" src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/spell/"+spell1+""}/></th></tr>
                          <tr><th><img className="spellImg" alt="" src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/spell/"+spell2+""}/></th></tr></td></div></td></tr>
                          <tr><td ><div className="championName">{name}</div></td></tr>                      </th> <td>
                        <div className="killDeath">{kill}/{death}/{assist}</div>
                        </td><td className="theItem"><tr><th><img className="itemImg" alt=""src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/item/"+item0+".png"}></img></th>
                        <td><img className="itemImg" alt=""src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/item/"+item1+".png"}></img></td>
                        <td><img className="itemImg" alt=""src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/item/"+item2+".png"}></img></td></tr>
                        <tr><th><img className="itemImg" alt=""src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/item/"+item3+".png"}></img></th>
                        <td><img className="itemImg" alt=""src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/item/"+item4+".png"}></img></td>
                        <td><img className="itemImg" alt=""src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/item/"+item5+".png"}></img></td>
                        <td><img className="itemImg" alt=""src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/item/"+item6+".png"}></img></td></tr></td>
                        <td className="matchInfo"><tr><th><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg1+""}></img>{summoner1}</th><td><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg6+""}></img>{summoner6}</td></tr>
                        <tr><th><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg2+""}></img>{summoner2}</th> <td><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg7+""}></img>{summoner7}</td></tr>
                        <tr><th><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg3+""}></img>{summoner3}</th><td><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg8+""}></img>{summoner8}</td></tr>
                        <tr><th><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg4+""}></img>{summoner4}</th><td><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg9+""}></img>{summoner9}</td></tr>
                        <tr><th><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg5+""}></img>{summoner5}</th><td><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg10+""}></img>{summoner10}</td></tr>
                        
                       
                        
                        
                        </td>
                    </div>
                    </tr>
                        :
                        <tr><div className="match" style={style}><td>{mode}<br/><hr/><br/>패배<br/>{time}</td><th>
                            <tr><td><div className="championInfo">
                          <td><img className="championImg" alt=""src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+img+""}/></td>
                          <td colSpan="2" rowSpan="2"><tr><th><img className="spellImg" alt="" src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/spell/"+spell1+""}/></th></tr>
                          <tr><th><img className="spellImg" alt="" src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/spell/"+spell2+""}/></th></tr></td></div></td></tr>
                          <tr><td ><div className="championName">{name}</div></td></tr>                      </th> <td>
                        <div className="killDeath">{kill}/{death}/{assist}</div>
                        </td><td className="theItem"><tr><th><img className="itemImg" alt=""src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/item/"+item0+".png"}></img></th>
                        <td><img className="itemImg" alt=""src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/item/"+item1+".png"}></img></td>
                        <td><img className="itemImg" alt=""src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/item/"+item2+".png"}></img></td></tr>
                        <tr><th><img className="itemImg" alt=""src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/item/"+item3+".png"}></img></th>
                        <td><img className="itemImg" alt=""src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/item/"+item4+".png"}></img></td>
                        <td><img className="itemImg" alt=""src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/item/"+item5+".png"}></img></td>
                        <td><img className="itemImg" alt=""src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/item/"+item6+".png"}></img></td></tr></td>
                        <td className="matchInfo"><tr><th><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg1+""}></img>{summoner1}</th><td><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg6+""}></img>{summoner6}</td></tr>
                        <tr><th><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg2+""}></img>{summoner2}</th> <td><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg7+""}></img>{summoner7}</td></tr>
                        <tr><th><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg3+""}></img>{summoner3}</th><td><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg8+""}></img>{summoner8}</td></tr>
                        <tr><th><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg4+""}></img>{summoner4}</th><td><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg9+""}></img>{summoner9}</td></tr>
                        <tr><th><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg5+""}></img>{summoner5}</th><td><img className="summonerChampion"src={"https://ddragon.leagueoflegends.com/cdn/"+ver+"/img/champion/"+summonerImg10+""}></img>{summoner10}</td></tr>
                        
                       
                        
                        
                        </td>
                    </div>
                    </tr>
                        
}</table>
    
            </div>   
}
//
export default Game;