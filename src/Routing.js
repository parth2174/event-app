import React from 'react';
//import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
//import Events from './Events';
//import EventsDisplay from './EventsDisplay';
import Events from './Events';
import Login from './Login';
import Register from './Register';


const Routing = () => {

// return (


// <BrowserRouter>
//    <div className="container">
//    <Routes>
//  <Route  path="/" element={<Home/>}/>
//  <Route  path="events" element={<Events/>}/>  
//  <Route  path="login" element={<Login/>}/> 
//  <Route  path="register" element={<Register/>}/> 
      
// {/* <Route  path="/events-display" component={<EventsDisplay/>} /> */}

                        
// <Route 
//   path="*" 
//     element={
//      <main>
//     <p>This is nothing on this route</p>
//      </main>
//         }
//     />

//    </Routes>
//     </div>
//     </BrowserRouter>
// )



  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );

  const PublicRoute = ({ component: Component, restricted, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && restricted ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );

  return (
    <Router>
      <Switch>
        <PublicRoute restricted={false} component={Register} path="/register" exact />
        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <PrivateRoute component={Home} path="/home" exact />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );


  
}

export default Routing;


