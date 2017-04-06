import React, {Component} from 'react';


class Notes extends Component {

    render() {
        return (
            <div className="text-center"><h1>Notes  - {this.props.userName}</h1></div>
        );
    }
}
export default Notes;