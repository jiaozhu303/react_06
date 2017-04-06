import React, {Component, PropTypes} from 'react';


class UserProfile extends Component {

    render() {

        return (
           <div >
               <h3>{this.props.userName}</h3>
               <ul className="list-group">
                   <li className="list-group-item">
                       <div className="thumbnail"><img src={this.props.info.avatar_url} alt=""/></div>
                   </li>
                   <li className="list-group-item"><h5>{this.props.info.company}</h5></li>
                   <li className="list-group-item"><h5>{this.props.info.email}</h5></li>
                   <li className="list-group-item"><h5>{this.props.info.login}</h5></li>
                   <li className="list-group-item"><h5>{this.props.info.repos_url}</h5></li>
               </ul>
           </div>
        );
    }
}
UserProfile.propTypes = {
    userName: PropTypes.string.isRequired,
    info: PropTypes.object.isRequired
}
export default UserProfile;