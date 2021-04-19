import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import About from './components/About'
import  Navbar  from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path='/' render={()=><Home/>}/>
          <Route exact path='/about' render={()=><About/>}/>
          <Route exact path='/contact' render={()=><Contact/>}/>
          <Route exact path='/projects' render={()=><Projects/>}/>
        </Switch>  
      </Router>
    </div>
  );
}

export default App;
