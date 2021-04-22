import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
// import Projects from './components/Projects'
import About from './components/About'
import  Navbar  from './components/Navbar';
import  Footer  from './components/Footer';
import ReactLoading from 'react-loading';

import React, { Suspense,lazy } from 'react';
const Projects = lazy(() => import('./components/Projects'));


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Router>
       <Suspense fallback={<ReactLoading type={'cubes'}height={'20%'} width={'20%'} id='loading'/>}>

        <Switch>
          <Route exact path='/' render={()=><Home/>}/>
          <Route exact path='/about' render={()=><About/>}/>
          <Route exact path='/contact' render={()=><Contact/>}/>
          <Route exact path='/projects' render={ ()=> <Projects/> }/>
        </Switch> 
        </Suspense>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
