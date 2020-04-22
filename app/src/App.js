import React from 'react';
import './App.css';
import { Link, Route } from "react-router-dom"
import Login from './components/login';
import PrivateRoute from './utils/routes';
import Friendslist from './components/friendList';
import AddFriendForm from './components/addFriendForm';
import { ImageBackground } from "../src/styles/index"
import { BackgroundContainer } from "../src/styles/index"
import { ContainerDiv } from "../src/styles/index"
import { ExcellentHeader } from "../src/styles/index"
import { LinkContainerDiv } from "../src/styles/index"



function App() {
  return (
    <ImageBackground>
    <BackgroundContainer>
      <ContainerDiv>
      <ExcellentHeader>Welcome to YOURFace</ExcellentHeader>
    <LinkContainerDiv>
     <Link to="/login">Login</Link>
     </LinkContainerDiv>
     <Route path="/login" component={Login} />
     <PrivateRoute path="/friendslist" component={Friendslist} />
     <PrivateRoute path="/addfriend" component={AddFriendForm} />
     </ContainerDiv>
     </BackgroundContainer>
    </ImageBackground>
  );
}

export default App;
