import React from 'react';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Services from './Services';
import User from './User';
import Search from './Search';
import {Route,Switch} from 'react-router-dom';

const App = ()=>{
   
    return(
        <>
        <Navbar/>
       <Switch>
           <Route exact path ='/' component={()=> <About name="About"/>}/>
           <Route exact path='/contact' component={Contact}/>
           <Route path='/contact/Services' render={()=> <Services name="Services"/>}/>
           <Route path ='/user/:fname/:lname' component={User}/>
           <Route path = '/search' component={Search}/>
           <Route  component={Error}/>
       </Switch>
        </>
    )
}
export default App;