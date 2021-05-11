import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WebcamCapture from './WebcamCapture';
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { login , logout , selectUser } from './features/appSlice';
import { useSelector } from 'react-redux';
import { auth } from './firebase';
import './App.css';

function App() {

  const user= useSelector(selectUser);
  const dispatch= useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) 
      {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
      {(!user) ? 
        (
          <Login />
        ) : 
        (
        <div className="app__body">
          <Switch>
            <Route path="/chats/view">
              <ChatView />
            </Route>
            <Route path="/chats">
              <Chats />
            </Route>
            <Route path="/preview">
              <Preview />
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
        )
      }
     
      </Router>
    </div>
  );
}

export default App;
