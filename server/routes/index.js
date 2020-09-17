const express = require('express');
const router = express.Router();
const axios = require('axios');
const request=require('request-promise');
const cors = require('cors');
const api_key='RGAPI-e5cff2aa-e664-4c2e-934c-4ae5fbcd411b';
var gameTime={};
var winFail={};
var killDeath={};
var myItem={};
var accountID="";
var matchID={};//==gameId
var matchSummoner={};
var myspellId={};
var mySpellImg={};
var version = "10.16.1";
var language = "ko_KR";
var match_champion_img={};
var match_champion_code={};
var match_champion_name={};
var theRank;
var match_select="https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/"+accountID+"?api_key="+api_key;
var get_match="https://kr.api.riotgames.com/lol/match/v4/matches/"+matchID+"?api_key="+api_key;
const summoner=encodeURI("볼붕이의오른가즘");
const summonerMe="볼붕이의오른가즘";//코드용 위에꺼 쓰니까 오류남
const spell="https://ddragon.leagueoflegends.com/cdn/"+version+"/data/"+language+"/summoner.json"
const champion_id="http://ddragon.leagueoflegends.com/cdn/"+version+"/data/"+language+"/champion.json"
const summoner_select = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+summoner+"?api_key="+api_key;
function create2DArray(rows, columns) {
  var arr = new Array(rows);
  for (var i = 0; i < rows; i++) {
      arr[i] = new Array(columns);
  }
  return arr;
}
var matchSummonerChampion = create2DArray(20, 10);
const optionSummoner ={
  encoding: "utf-8",
  method: "GET",
  url : summoner_select
}
router.use(cors());
request(optionSummoner,async function(error, response, body){
  if(!error&&response.statusCode==200){
  const data = JSON.parse(body);
  router.get('/', (req, res)=>res.json(data));
  theRank="https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/"+data["id"]+"?api_key="+api_key+"";
  accountID=data.accountId;
  
  match_select="https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/"+accountID+"?api_key="+api_key+"";
  }
  await(MATCH_V4());
  await(theRanking());
});
function theRanking(){
  var options ={
    encoding: "utf-8",
    method:"GET",
    url: theRank
  }
  router.use(cors());
  request(options,async function(error, response, body){
    if(!error&&response.statusCode==200){
      const rankData=JSON.parse(body);
      router.get('/myRank', (req, res)=>res.json(rankData));
}});
}
function MATCH_V4(){
  var sort_match_data={}
  var options ={
    encoding: "utf-8",
    method:"GET",
    url: match_select
  }
  request(options,async function(error, response, body){
    if(!error&&response.statusCode==200){
      const match_data=JSON.parse(body);
      for(var i=0; i<20;i++){
       sort_match_data[i]=match_data["matches"][i];
       matchID[i]=sort_match_data[i]["gameId"];   
       match_champion_code[i]=sort_match_data[i]["champion"];
       
      }
      
      
    router.get('/lol', (req, res)=>res.json(sort_match_data));
     async function winFails(){
       for(var k=0; k<20;k++){
          get_match="https://kr.api.riotgames.com/lol/match/v4/matches/"+matchID[k]+"?api_key="+api_key;//0대신 k
          await GET_MATCH_V4(k);//안에 k
          //setTimeout(console.log("기다려발"), 1000);
      }
    
    }
    winFails()
       await(GET_MYCHAMPION());
     }
  });
}
async function GET_MATCH_V4(k){//안에 k
  var optionMATCH ={
    encoding: "utf-8",
    method:"GET",
    url: get_match
  }
  await request(optionMATCH,async function(error, response, body){
    if(!error&&response.statusCode==200){
    const data = JSON.parse(body);//이 데이터에 팀정보 있드라
    //console.log(data.teams[0])//어느팀이 승리햇는가
    //console.log(data.participants[0].teamId,data.participants[0].participantId);//참가자 번호와 팀+ 스펠종류
    //console.log(data.participantIdentities);//참가자 번호에 따른 개인정보
    //console.log(data.participants[0].championId);이게 딴놈들 챔피언 아디
    matchSummoner[k]={"matchSummoner1":data.participantIdentities[0].player.summonerName,"matchSummoner2":data.participantIdentities[1].player.summonerName,"matchSummoner3":data.participantIdentities[2].player.summonerName,"matchSummoner4":data.participantIdentities[3].player.summonerName,"matchSummoner5":data.participantIdentities[4].player.summonerName,"matchSummoner6":data.participantIdentities[5].player.summonerName,"matchSummoner7":data.participantIdentities[6].player.summonerName,"matchSummoner8":data.participantIdentities[7].player.summonerName,"matchSummoner9":data.participantIdentities[8].player.summonerName,"matchSummoner10":data.participantIdentities[9].player.summonerName};
    
    var sortTime=parseInt(data.gameDuration/60)+"분 "+data.gameDuration%60+"초";
    //var startTime=data.gameCreation;게임한 날짜
    var theMode=data.gameMode//일반모드인지 단일모드인지 솔랭자랭인지는 안알려주는거같다
  
    
    gameTime[k]={"gameTime":sortTime,"theMode":theMode};
    for(var i=0;i<10;i++){
      matchSummonerChampion[k][i]=data.participants[i].championId;
      
      if(summonerMe==data.participantIdentities[i].player.summonerName){//내 이름과 비교
       // console.log(data.participantIdentities[i].player.summonerName,"는",data.participantIdentities[i].participantId,"번입니다.");       
         //     console.log(summonerMe,"는",data.participants[i].teamId,"팀입니다")
         
         myItem[k]={"item0":data.participants[i].stats.item0,"item1":data.participants[i].stats.item1,"item2":data.participants[i].stats.item2,"item3":data.participants[i].stats.item3,"item4":data.participants[i].stats.item4,"item5":data.participants[i].stats.item5,"item6":data.participants[i].stats.item6}
         killDeath[k]={"kill":data.participants[i].stats.kills,"death":data.participants[i].stats.deaths,"assist":data.participants[i].stats.assists}
         myspellId[k]={"mySpell1Id":data.participants[i].spell1Id,"mySpell2Id":data.participants[i].spell2Id};
              if(data.participants[i].stats.win==true){//승리패배 두가지니 ifelse로 끝내자
              //console.log(summonerMe,"님은",data.teams[0].win,"하셨습니다 ㅊㅊ");
                winFail[k]="Win";
                
              if(k==19){
                
                router.get('/lol5', (req, res)=>res.json(winFail));
                router.get('/lol6', (req, res)=>res.json(killDeath));
         router.get('/lol7', (req, res)=>res.json(myItem));
         router.get('/lol8', (req, res)=>res.json(matchSummoner));
         router.get('/lol12', (req, res)=>res.json(gameTime));
         
         GET_MATCH_CHAMPION()
         getSpell()
              }
              }else{
                //console.log(summonerMe,"님은",data.teams[1].win,"하셨습니다 ㅋㅋ");
                winFail[k]="Fail";
                if(k==19){
                    
                    router.get('/lol5', (req, res)=>res.json(winFail));
                    router.get('/lol6', (req, res)=>res.json(killDeath));
         router.get('/lol7', (req, res)=>res.json(myItem));
         router.get('/lol8', (req, res)=>res.json(matchSummoner));
         router.get('/lol12', (req, res)=>res.json(gameTime));
         
         GET_MATCH_CHAMPION()
         getSpell()
               }
              }
      }
    }
    //router.get('/lol2', (req, res)=>res.json(data));
    }
  });
}
function GET_MYCHAMPION(){
  const optionChampion ={
    encoding: "utf-8",
    method: "GET",
    url : champion_id
  }
  request(optionChampion,async function(error, response, body){
    if(!error&&response.statusCode==200){
    const data = JSON.parse(body);
    const Cdata=data["data"];
    
    for(var i=0; i<20;i++){
    for (var prop in Cdata){ 
      
      if(Cdata[prop]["key"]==match_champion_code[i]){
       match_champion_name[i]=Cdata[prop]["name"];
       match_champion_img[i]=Cdata[prop]["image"]["full"];
       
      }
    }
    }
   var sort_match_data=[{name:null ,img: null},{name:null ,img:null},{name:null ,img:null},{name:null, img:null},{name:null, img:null},{name:null, img:null},{name:null, img:null},{name:null, img:null},{name:null, img:null},{name:null, img:null},{name:null, img:null},{name:null, img:null},{name:null, img:null},{name:null, img:null},{name:null, img:null},{name:null, img:null},{name:null, img:null},{name:null, img:null},{name:null, img:null},{name:null, img:null}]
    for(var i=0; i<20;i++){
      sort_match_data[i]["name"]=match_champion_name[i];
      sort_match_data[i]["img"]=match_champion_img[i]
      
   }   
   
      router.get('/lol3', (req, res)=>res.json(sort_match_data));     
  }});
}
function GET_MATCH_CHAMPION(){
  const optionChampion ={
    encoding: "utf-8",
    method: "GET",
    url : champion_id
  }
  request(optionChampion,async function(error, response, body){
    if(!error&&response.statusCode==200){
      const data = JSON.parse(body);
      const Cdata=data["data"];
      var matchSummonerName=create2DArray(20, 10);
      for(var i=0; i<20;i++){
        for(var k=0; k<10;k++){
      for (var prop in Cdata){ 
        if(Cdata[prop]["key"]==matchSummonerChampion[i][k]){
         matchSummonerName[i][k]=Cdata[prop]["image"]["full"];
         
        }
      }
      }
      }
     
      
        router.get('/lol9', (req, res)=>res.json(matchSummonerName));     
    }});
}
function getSpell(){
  const optionSpell ={
    encoding: "utf-8",
    method: "GET",
    url : spell
  }
  request(optionSpell,async function(error, response, body){
    if(!error&&response.statusCode==200){
          
      const data = JSON.parse(body);
      const Cdata=data["data"];
      var mySpellImg1=[{spell1:null },{spell1:null },
      {spell1:null },
      {spell1:null },
      {spell1:null },
      {spell1:null },
      {spell1:null },
      {spell1:null },
      {spell1:null },
      {spell1:null },
      {spell1:null },
      {spell1:null },
      {spell1:null },
      {spell1:null },
      {spell1:null },
      {spell1:null },
      {spell1:null },
      {spell1:null},
      {spell1:null },
      {spell1:null }]
      var mySpellImg2=[{spell2:null },{spell2:null },
      {spell2:null },
      {spell2:null },
      {spell2:null },
      {spell2:null },
      {spell2:null },
      {spell2:null },
      {spell2:null },
      {spell2:null },
      {spell2:null },
      {spell2:null },
      {spell2:null },
      {spell2:null },
      {spell2:null },
      {spell2:null },
      {spell2:null },
      {spell2:null},
      {spell2:null },
      {spell2:null }]
      
      for(var i=0; i<20;i++){
        for (var prop in Cdata){ 
          
          if(Cdata[prop]["key"]==myspellId[i]["mySpell1Id"]){
            
           mySpellImg1[i]["spell1"]=Cdata[prop]["image"]["full"]
           
          }
          if(Cdata[prop]["key"]==myspellId[i]["mySpell2Id"]){
           
            mySpellImg2[i]["spell2"]=Cdata[prop]["image"]["full"]

        }
        
        }
        
        router.get('/lol10', (req, res)=>res.json(mySpellImg1))
        router.get('/lol11', (req, res)=>res.json(mySpellImg2));
        }
    }})
}


module.exports = router;