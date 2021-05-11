import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { login , logout , selectUser } from './features/appSlice';
import { useSelector } from 'react-redux';
import { auth } from './firebase';
import './App.css';
import WebcamCapture from "./WebcamCapture";

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
          <>
          <img className="app__logo" 
               src="https://th.bing.com/th/id/OIP.HnuWGhX09YfGjyUQQjM_dwHaEK?w=289&h=180&c=7&o=5&dpr=1.25&pid=1.7" 
               alt="SC" 
          />
          <div className="app__body">
            <div className="app__bodyBackground">
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
          </div>
        </>
        )
      }
     
      </Router>
    </div>
  );
}

export default App;
