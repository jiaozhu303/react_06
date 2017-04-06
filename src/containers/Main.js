import React, {Component} from 'react';
import SearchGitHub from '../components/SearchGitHub';

class Main extends Component {
    render() {
        return (<div>
            <nav className="navbar navbar-default">
                <div className="col-sm-7 col-sm-offset-4" style={{paddingTop: 15}}>
                    <SearchGitHub />
                </div>
            </nav>
            <div className="container">
                {this.props.children}
            </div>

        </div>);
    }
}
export default Main;