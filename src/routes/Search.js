import React from "react";
import axios from "axios";
import tier1 from "../tier/Emblem_Iron.png";
import tier2 from "../tier/Emblem_Bronze.png";
import tier3 from "../tier/Emblem_Silver.png";
import tier4 from "../tier/Emblem_Gold.png";
import tier5 from "../tier/Emblem_Platinum.png";
import tier6 from "../tier/Emblem_Diamond.png";
import tier7 from "../tier/Emblem_Master.png";
import tier8 from "../tier/Emblem_Grandmaster.png";
import tier9 from "../tier/Emblem_Challenger.png";
import Game from "../components/Game";
import "./Home.css";



async function name(params) {
  this.count = params
  var test = new Array()
  for(var i = 0; i<= this.count; i++ ){
    test[i] = {'id' : i}
  }
  await axios.get('this.url')   
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.match.params.Rname,
      isLoading: true,
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
    rankData:[],
    fRankData:[],
    theName:'',
    hide:true,
    reactData:[],
    value:''
    };
    
  }
  
  state={
    isLoading: true,
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
    rankData:[],
    fRankData:[],
    name:'',
    theName:'',
    hide:true,
    reactData:[],
    value:''
  };
  
  fetching = async () => {
    const api_key = "RGAPI-e5cff2aa-e664-4c2e-934c-4ae5fbcd411b";
    var MeSort_match_data = [
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
      { name: null, img: null },
    ];
    var mySpellImg1 = [
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
      { spell1: null },
    ];
    var mySpellImg2 = [
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
      { spell2: null },
    ];
    function create2DArray(rows, columns) {
      var arr = new Array(rows);
      for (var i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
      }
      return arr;
    }
    var matchSummonerChampion = create2DArray(20, 10);
    var sort_match_data = {};
    var matchID = {};
    var match_champion_img = {};
    var match_champion_code={};
    var matchSummonerName=create2DArray(20, 10);
    var get_match = {};
    var gameTime = {};
    var winFail = {};
    var killDeath = {};
    var myItem = {};
 
 var summonerMe;
 
    var matchID = {}; //==gameId
    var matchSummoner = {};
    var myspellId = {};
    var mySpellImg = {};
    var version = "10.21.1";
    var language = "ko_KR";
    var match_champion_name = {};
   
    
   
    //axios.defaults.baseURL = 'https://kr.api.riotgames.com';
//axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
//axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    const accountData = await axios.get(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.state.name}?api_key=${api_key}`
    );
    console.log(accountData);
summonerMe=this.state.name;
    const accountID = accountData.data.accountId;
    this.setState({myInfo: accountData.data});
    const theRank = await axios.get(
      "/lol/league/v4/entries/by-summoner/" +
        accountData.data.id +
        "?api_key=" +
        api_key +
        ""
    );
    console.log(theRank)
   await theRank["data"][0]!=null?this.setState({rankData: theRank["data"][0]}):this.setState({rankData: ""})
    await theRank["data"][1]!=null?this.setState({fRankData: theRank["data"][1]}):this.setState({fRankData: ""})
    

    const match_select = await axios.get(
      "/lol/match/v4/matchlists/by-account/" +
        accountID +
        "?api_key=" +
        api_key +
        ""
    );
    console.log(match_select);
    const GET_MATCH_CHAMPION=async()=>{
      var data=await axios.get("http://ddragon.leagueoflegends.com/cdn/"+version+"/data/"+language+"/champion.json")
      var Cdata=data["data"]["data"];
      
      for(var i=0; i<20;i++){
        for(var k=0; k<10;k++){
      for (var prop in Cdata){ 
        if(Cdata[prop]["key"]==matchSummonerChampion[i][k]){
         matchSummonerName[i][k]=Cdata[prop]["image"]["full"];
         
        }
      }
      }
      }
      
      this.setState({otherChamp:matchSummonerName})
    }
    const getSpell=async()=>{
      var data=await axios.get("https://ddragon.leagueoflegends.com/cdn/"+version+"/data/"+language+"/summoner.json")
      var Cdata=data["data"]["data"];
      
      
      for(var i=0; i<20;i++){
        for (var prop in Cdata){ 
          
          if(Cdata[prop]["key"]==myspellId[i]["mySpell1Id"]){
            
           mySpellImg1[i]["spell1"]=Cdata[prop]["image"]["full"]
           
          }
          if(Cdata[prop]["key"]==myspellId[i]["mySpell2Id"]){
           
            mySpellImg2[i]["spell2"]=Cdata[prop]["image"]["full"]

        }
        
        }
    }
    this.setState({spell1: mySpellImg1});
    this.setState({spell2: mySpellImg2});
    this.setState({isLoading:false})
  }
  const GET_MYCHAMPION=async()=>{
    var data=await axios.get("http://ddragon.leagueoflegends.com/cdn/"+version+"/data/"+language+"/champion.json");
    var Cdata=data["data"]["data"];
    
    for(var i=0; i<20;i++){
    for (var prop in Cdata){ 
      
      if(Cdata[prop]["key"]==match_champion_code[i]){
       match_champion_name[i]=Cdata[prop]["name"];
       match_champion_img[i]=Cdata[prop]["image"]["full"];
      
      }
    }
    }
   
    for(var i=0; i<20;i++){
      MeSort_match_data[i]["name"]=match_champion_name[i];
      MeSort_match_data[i]["img"]=match_champion_img[i]
      
   }   
   this.setState({myGame: MeSort_match_data});
   
  }
    const matchF=async(k)=> {
      get_match[k] = await axios.get(
        "/lol/match/v4/matches/" + matchID[k] + "?api_key=" + api_key
      );
      matchSummoner[k] = {
        matchSummoner1:
          get_match[k].data.participantIdentities[0].player.summonerName,
        matchSummoner2:
          get_match[k].data.participantIdentities[1].player.summonerName,
        matchSummoner3:
          get_match[k].data.participantIdentities[2].player.summonerName,
        matchSummoner4:
          get_match[k].data.participantIdentities[3].player.summonerName,
        matchSummoner5:
          get_match[k].data.participantIdentities[4].player.summonerName,
        matchSummoner6:
          get_match[k].data.participantIdentities[5].player.summonerName,
        matchSummoner7:
          get_match[k].data.participantIdentities[6].player.summonerName,
        matchSummoner8:
          get_match[k].data.participantIdentities[7].player.summonerName,
        matchSummoner9:
          get_match[k].data.participantIdentities[8].player.summonerName,
        matchSummoner10:
          get_match[k].data.participantIdentities[9].player.summonerName,
                 
        };
        var sortTime=parseInt(get_match[k].data.gameDuration/60)+"분 "+get_match[k].data.gameDuration%60+"초";
    //var startTime=data.gameCreation;게임한 날짜
    var theMode=get_match[k].data.gameMode;
    gameTime[k]={"gameTime":sortTime,"theMode":theMode};
    for(var i=0;i<10;i++){
      matchSummonerChampion[k][i]=get_match[k].data.participants[i].championId;
      
      if(summonerMe==get_match[k].data.participantIdentities[i].player.summonerName){//내 이름과 비교
       // console.log(data.participantIdentities[i].player.summonerName,"는",data.participantIdentities[i].participantId,"번입니다.");       
         //     console.log(summonerMe,"는",data.participants[i].teamId,"팀입니다")
         
         myItem[k]={"item0":get_match[k].data.participants[i].stats.item0,"item1":get_match[k].data.participants[i].stats.item1,"item2":get_match[k].data.participants[i].stats.item2,"item3":get_match[k].data.participants[i].stats.item3,"item4":get_match[k].data.participants[i].stats.item4,"item5":get_match[k].data.participants[i].stats.item5,"item6":get_match[k].data.participants[i].stats.item6}
         killDeath[k]={"kill":get_match[k].data.participants[i].stats.kills,"death":get_match[k].data.participants[i].stats.deaths,"assist":get_match[k].data.participants[i].stats.assists}
         myspellId[k]={"mySpell1Id":get_match[k].data.participants[i].spell1Id,"mySpell2Id":get_match[k].data.participants[i].spell2Id};
              if(get_match[k].data.participants[i].stats.win==true){//승리패배 두가지니 ifelse로 끝내자
              //console.log(summonerMe,"님은",data.teams[0].win,"하셨습니다 ㅊㅊ");
                winFail[k]="Win";
                
              if(k==19){
                this.setState({winFail:winFail});
                this.setState({killDeath:killDeath});
                this.setState({myItem:myItem});
                this.setState({otherSummon:matchSummoner});
                this.setState({tData:gameTime});
               // this.setState({matchSummonerChampion:matchSummonerChampion});
                
               await GET_MATCH_CHAMPION();
               await getSpell();
              }
              }else{
                //console.log(summonerMe,"님은",data.teams[1].win,"하셨습니다 ㅋㅋ");
                winFail[k]="Fail";
                if(k==19){
                  this.setState({winFail:winFail});
                  this.setState({killDeath:killDeath});
                  this.setState({myItem:myItem});
                  this.setState({otherSummon:matchSummoner});
                  this.setState({tData:gameTime});
                  
                  await GET_MATCH_CHAMPION();
               await getSpell();
               }
              }
      }
    }
    };
    
    for (var k = 0; k < 20; k++) {
      
      sort_match_data[k] = match_select["data"]["matches"][k];
      matchID[k] = sort_match_data[k]["gameId"];
      match_champion_code[k] = sort_match_data[k]["champion"];
      matchF(k);
      
    }
    
    GET_MYCHAMPION();
    
  };
  componentDidMount() {
    this.fetching();
  }
  render() {
    const {reactData,hide,name,theName,isLoading,myInfo,myMetch,myGame,chamImg,winFail,killDeath,myItem,otherChamp,otherSummon,spell1,spell2,tData,rankData,fRankData}= this.state;
    var tier;
    var tierA;
    var firstName;
    
    var sortWinFail=[];
    for(var i=0;i<20;i++){
      sortWinFail[i]={"winFail":winFail[i]};
      }
     
    var imE=[];
   for(var i=0;i<20;i++){
     
   imE[i]={...myGame[i],...sortWinFail[i],...killDeath[i],...myItem[i],...otherSummon[i],...otherChamp[i],...spell1[i],...spell2[i],...tData[i]};
   }
   
    if(rankData.tier=="IRON"){
      tier=tier1
      tierA=1
    }else if(rankData.tier=="BRONZE"){
      tier=tier2
      tierA=2
    }else if(rankData.tier=="SILVER"){
      tier=tier3
      tierA=3
    }else if(rankData.tier=="GOLD"){
      tier=tier4
      tierA=4
     }else if(rankData.tier=="PLATINUM"){
      tier=tier5
      tierA=5
     }else if(rankData.tier=="DIAMOND"){
      tier=tier6
      tierA=6
     }else if(rankData.tier=="MASTER"){
      tier=tier7
      tierA=7
     }else if(rankData.tier=="GRANDMASTER"){
       tier=tier8
       tierA=8
     }else if(rankData.tier=="CHALLENGER"){
       tier=tier9
       tierA=9
     } 
     var Ftier 
     var FtierA
     if(fRankData.tier=="IRON"){
       Ftier=tier1
       FtierA=1
     }else if(fRankData.tier=="BRONZE"){
       Ftier=tier2
       FtierA=2
     }else if(fRankData.tier=="SILVER"){
       Ftier=tier3
       FtierA=3
     }else if(fRankData.tier=="GOLD"){
       Ftier=tier4
       FtierA=4
      }else if(fRankData.tier=="PLATINUM"){
       Ftier=tier5
       FtierA=5
      }else if(fRankData.tier=="DIAMOND"){
       Ftier=tier6
       FtierA=6
      }else if(fRankData.tier=="MASTER"){
       Ftier=tier7
       FtierA=7
      }else if(fRankData.tier=="GRANDMASTER"){
        Ftier=tier8
        FtierA=8
      }else if(fRankData.tier=="CHALLENGER"){
        Ftier=tier9
        FtierA=9
      }  
    console.log(tier)
    
    return <body className ="container">{isLoading
      ? <div className="loader" >
        <span className = "loader_text">로딩중</span>
        <div></div>
      </div>

      :myInfo.name?(<div>
         
    <div className="backGroundTheme">
    
   
  
  


 
  <div className="myName">
    <div className="nameText">
  {myInfo.name}.gg
  </div>
  </div>



</div><div className="cssBox">{rankData.queueType=="RANKED_FLEX_SR"?<aside className="test2"><div className="testContent"><div className="test1" ><img className="tierImg"src={Ftier}/><div className="tierRank1">솔로랭크<br/><a className="tierRank1_A">{fRankData.tier} {fRankData.rank}</a> <br/>{fRankData.wins}승 {fRankData.losses}패<br/>승률{`${Math.floor(fRankData.wins/(fRankData.wins+fRankData.losses)*100)}%`}</div></div></div>
<div className="testContent"><div className="test1" ><img className="tierImg"src={tier}/><div className="tierRank1">자유랭크<br/><a className="tierRank1_A">{rankData.tier} {rankData.rank}</a> <br/>{rankData.wins}승 {rankData.losses}패<br/>승률{`${Math.floor(rankData.wins/(rankData.wins+rankData.losses)*100)}%`}</div></div></div></aside>:
<aside className="test2"><div className="testContent"><div className="test1" ><img className="tierImg"src={tier}/><div className="tierRank1">솔로랭크<br/><a className="tierRank1_A">{rankData.tier} {rankData.rank}</a> <br/>{rankData.wins}승 {rankData.losses}패<br/>승률{`${Math.floor(rankData.wins/(rankData.wins+rankData.losses)*100)}%`}</div></div></div>
<div className="testContent"><div className="test1" ><img className="tierImg"src={Ftier}/><div className="tierRank1">자유랭크<br/><a className="tierRank1_A">{fRankData.tier} {fRankData.rank}</a> <br/>{fRankData.wins}승 {fRankData.losses}패<br/>승률{`${Math.floor(fRankData.wins/(fRankData.wins+fRankData.losses)*100)}%`}</div></div></div></aside>}
<section className="test2">
<div className="compoGame">
  
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





</div></section>
</div></div>
      ):(<body><div className="notSetting">검색하소</div></body>)}
   
      <footer>나는요 라랄라</footer></body>
  }
}

export default Search;
