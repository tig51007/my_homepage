const express = require('express');
const router = express.Router();
const axios = require('axios');
const request=require('request-promise');
const cors = require('cors');
const api_key='RGAPI-e5cff2aa-e664-4c2e-934c-4ae5fbcd411b';
var winFail={}
var accountID="";
var matchID={};//==gameId
var version = "10.16.1";
var language = "ko_KR";
var match_champion_img={};
var match_champion_code={};
var match_champion_name={};
var match_select="https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/"+accountID+"?api_key="+api_key;
var get_match="https://kr.api.riotgames.com/lol/match/v4/matches/"+matchID+"?api_key="+api_key;
const summoner=encodeURI("볼붕이의오른가즘");
const summonerMe="볼붕이의오른가즘";//코드용 위에꺼 쓰니까 오류남
const champion_id="http://ddragon.leagueoflegends.com/cdn/"+version+"/data/"+language+"/champion.json"
const summoner_select = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+summoner+"?api_key="+api_key;
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
  accountID=data.accountId;
  match_select="https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/"+accountID+"?api_key="+api_key;
  }
  await(MATCH_V4());
});
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
    for(var i=0;i<10;i++){
      if(summonerMe==data.participantIdentities[i].player.summonerName){//내 이름과 비교
       // console.log(data.participantIdentities[i].player.summonerName,"는",data.participantIdentities[i].participantId,"번입니다.");       
         //     console.log(summonerMe,"는",data.participants[i].teamId,"팀입니다")
              if(data.teams[0].teamId==data.participants[i].teamId){//승리패배 두가지니 ifelse로 끝내자
              //console.log(summonerMe,"님은",data.teams[0].win,"하셨습니다 ㅊㅊ");
              winFail[k]=data.teams[0].win;
              
              if(k==19){
                console.log(winFail);
                router.get('/lol5', (req, res)=>res.json(winFail));
              }
              }else{
                //console.log(summonerMe,"님은",data.teams[1].win,"하셨습니다 ㅋㅋ");
                winFail[k]=data.teams[0].win;
                if(k==19){
                    console.log(winFail);
                    router.get('/lol5', (req, res)=>res.json(winFail));
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
       match_champion_img[i]=Cdata[prop]["image"]["full"]
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
module.exports = router;