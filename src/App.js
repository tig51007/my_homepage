import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Test from "./routes/Test";
import Navigation from "./components/Navigation";


function App() {
  
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home} />
      <Route path="/test" component={Test}/>
      
    </HashRouter>
  );
}

export default App;
