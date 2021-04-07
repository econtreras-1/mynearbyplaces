import {HashRouter, Switch, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import './App.css';

import Home from './Components/Home';
import Login from './Components/Login';
import Add from './Components/Add';
import AddReview from './Components/AddReview';
import Delete from './Components/Delete';
import Review from './Components/Review';
import Edit from './Components/Edit';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import business_type from './Components/data'




function App() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [list, setList] = useState(business_type)
  let onLoggedIn = (email) => {
    localStorage.setItem('username', email);
    setUsername(email);
  }


  return (
    <HashRouter>
      <Container fluid>
        <Header />
        <NavigationBar username={username} />
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/login">
            <Login onLoggedIn={onLoggedIn} />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/delete" component={Delete}>
            <Delete />
          </Route>
          <Route path="/edit" component={Edit}>
            <Edit />
          </Route>
          <Route path="/review" component={Review}>
            <Review />
          </Route>
          <Route path="/addreview" component={AddReview}>
            <AddReview />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </HashRouter>
  );
};
export default App;