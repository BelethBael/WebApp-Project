import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
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
                Profile
            </div>
        )
    }
}

export default Profile

