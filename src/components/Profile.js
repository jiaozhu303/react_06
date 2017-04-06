import React, {Component} from 'react';
import UserRepos from './UserRepos';
import UserProfile from './UserProfile';
import Notes from './Notes';

import getAll from '../utils/GetInfo';

class Profile extends Component {
    constructor(props) {
        super(props);
        const userName = this.props.params.userName;
        this.state = {
            userName: userName,
            info: {},
            repos: [0, 1, 2, 3],
            notes: []
        }
    }

    getUser(userName){
        getAll(userName).then(data => {
            this.setState({
                userName: userName,
                info: data.userInfo,
                repos: data.userRepos,
                notes: []
            });
        });
    }

    componentWillReceiveProps( nextProps) {
        // const userName = this.props.params.userName;
        this.getUser(nextProps.params.userName);

    }
    componentDidMount() {
        const userName = this.props.params.userName;
        this.getUser(userName);
    }



    render() {

        return (

            <div className="row">
                <div className="col-sm-4">
                    <UserProfile userName={this.state.userName} info={this.state.info}/>
                </div>
                <div className="col-sm-4">
                    <UserRepos userName={this.state.userName} repos={this.state.repos}/>
                </div>
                <div className="col-sm-4">
                    <Notes userName={this.state.userName} notes={this.state.notes}/>
                </div>
            </div>
        );
    }
}
export default Profile;