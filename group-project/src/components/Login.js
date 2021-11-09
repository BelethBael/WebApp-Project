import React from 'react';
import './css/Login.css'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            person:[
                {
                    name:"ananda",
                    id:"1150",
                },
                {
                    name:"pichaya",
                    id:"1350",
                },
                {
                    name:"Ale",
                    id:"1420",
                },
            ]
        }
    }

    render(){
        return(
            <div>
                Login
            </div>
        )
    }
}

export default Login

