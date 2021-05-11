import React from 'react';
import { Button } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { login } from './features/appSlice';
import { auth , provider } from './firebase';
import './Login.css';

function Login() {

    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(login({
                username: result.user.displayName,
                profilePic: result.user.photoURL,
                id: result.user.uid,
                })
            );
        }).catch((error) => alert(error));
    };

  return (
    <div className="login">
        <div className="login__container">
            <img src="https://th.bing.com/th/id/OIP.HnuWGhX09YfGjyUQQjM_dwHaEK?w=289&h=180&c=7&o=5&dpr=1.25&pid=1.7" alt="SC" />
            <Button variant='outlined' onClick={signIn}>Sign In</Button>
        </div>
    </div>
  );
}

export default Login;
