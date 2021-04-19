import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={()=><Home/>}/>
        <Route exact path='/about' render={()=><About/>}/>
        <Route exact path='/contact' render={()=><Contact/>}/>
        <Route exact path='/projects' render={()=><Projects/>}/>
      </Switch>
      
    </Router>
  );
}

export default App;
