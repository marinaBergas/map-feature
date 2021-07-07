import "./App.css";
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from "./componenets/homePage/Home";
import SchoolCard from "./componenets/slider/schoolCard";
function App() {
  return (
    
    <HashRouter>
      <Switch>
       <Route path="/" exact component={Home} />
       <Route path={`/:schoolname`} component={SchoolCard } />
       </Switch>
     </HashRouter>

  );
}

export default App;
