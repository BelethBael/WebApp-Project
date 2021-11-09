import React from 'react';

class Post extends React.Component{
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
        console.log("Post")
        return(
            <div>
                Post
            </div>
        )
    }
}

export default Post

