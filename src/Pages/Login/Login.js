import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// import useFirebase from "../../Hooks/useFirebase";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import InitializeFirebase from "../../Firebase/Firebase.init";

InitializeFirebase();


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const { GoogleSignIn } = useAuth() || {};
    const location = useLocation();
    const history = useHistory();
    const redirectLocation = location.state?.from || '/Home'
    const SignIn = () => {
        GoogleSignIn()
            .then(result => {
                setUser(result.user)
                history.push(redirectLocation)
            })
    }


    return (
        <div className="d-flex flex-column  justify-content-center align-items-center mt-5">
            <h1 className="text-white fw-bolder">Please login by Google</h1>
            <button className="btn btn-warning my-3" onClick={SignIn}>Google</button>
        </div>
    );
};

export default Login;
