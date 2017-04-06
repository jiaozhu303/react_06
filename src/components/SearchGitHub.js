import React, {Component, PropTypes} from 'react';


class SearchGitHub extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.context.router.push(`/profile/${this.userName.value}`);
        this.userName.value = "";
    }

    render() {
        return (
            <form >
                <div className="form-group col-sm-7">
                    <input type="text" className="form-control" placeholder="Search" ref={ref => {
                        this.userName = ref
                    }}/>
                </div>
                <div className="form-group  col-sm-5">
                    <button className="btn btn-info" onClick={this.handleSubmit}>搜索github</button>
                </div>
            </form>
        );
    }
}
SearchGitHub.contextTypes = {
    router: PropTypes.object
}
export default SearchGitHub;