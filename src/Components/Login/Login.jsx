import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth"
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState()
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const hanldeGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    };
    const handleGithubSignIn = () => {
         signInWithPopup(auth, gitHubProvider)
         .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser);
         })
         .then(error => {
            console.log(error);
         })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                setUser(null)
                console.log(result);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            {user ?
                <button onClick={handleSignOut}>Sign Out</button> :
                <div>
                    <button onClick={hanldeGoogleSignIn}>Sign In</button>
                    <button onClick={handleGithubSignIn}>Sign in by Github</button>
                </div>
            }
            {user && <div>
                <h2>User: {user.displayName}</h2>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
            }

        </div>
    );
};

export default Login;