import React from 'react';
import { Redirect, Link, withRouter,Switch,Route } from 'react-router-dom'
import Profile from './Profile'
import Post from './Post'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: null
        }
    }

    componentDidMount() {
        // if(!this.props.authorized){
        //     console.log(this.props.authorized);
        //     this.setState({auth:<Redirect to="/login" />})
        // }
    }

    render() {
        return (
            <div>
                HOME
                <Link to={this.props.match.url+"/profile"}>p</Link>
                <Link to={this.props.match.url+"/post"}>po</Link>
                <Switch>
                    <Route exact path={this.props.match.path+"/profile"} component={Profile} />
                    <Route exact path={this.props.match.path+"/post"} component={Post} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Home)

