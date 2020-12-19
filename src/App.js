import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Test from "./routes/Test";
import Navigation from "./components/Navigation";
import Search from "./routes/Search";
import { CookiesProvider } from 'react-cookie';
function App() {
  
  return (
    <CookiesProvider>
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home} />
      <Route path="/test" component={Test}/>
      <Route path="/search/:Rname" component={Search} />
      
    </HashRouter>
    </CookiesProvider>
  );
}

export default App;
