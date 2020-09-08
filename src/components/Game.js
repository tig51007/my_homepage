import React from "react";
import PropTypes from "prop-types";

function Game({name,img}){
    return  <div>
            <div>기온: {img}</div>
            <div>지역: {name}</div> 
            
            </div>   
}
Game.propTypes={
    
    name: PropTypes.string.isRequired,
    
    img :PropTypes.string.isRequired,
    
};
export default Game;