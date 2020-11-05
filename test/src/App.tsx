import React from 'react';
import {Route} from "react-router-dom";
import {userAPI} from "./api/userAPI";
import {Login} from "./components/Login/Login";

let login = () => {
    userAPI.auth("test_super", "Nf<U4f<rDbtDxAPn")
        .then(response => {
            return console.log(response)
        })
}

let getUsers = () => {
    userAPI.getUsers()
        .then(response => {
            return console.log(response)
        })
}

class App extends React.Component {
    render() {

        return (
            <div>
                <Route path="/login" render={() => <Login/>}/>
                <button onClick={login}>Login</button>
                <button onClick={getUsers}>Get Users</button>

            </div>
        )
    }
}

export default App;

