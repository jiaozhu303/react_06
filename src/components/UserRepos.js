import React, {Component} from 'react';


class UserRepos extends Component {

    render() {
        return (
            <div className="text-center"><h1>UserRepos  - {this.props.userName}</h1></div>
        );
    }
}
export default UserRepos;