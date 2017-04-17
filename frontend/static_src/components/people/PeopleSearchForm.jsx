import React from 'react';

class PeopleSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            query: ''
        }
    }
    onSearch(e) {
        e.preventDefault();
        this.props.onSearch(this.state.query);
    }

    onChange(e) {
        this.setState({query: e.target.value});
    }
    render() {
        return < div > <h2>Search</h2> < form > <textarea value={this.state.query} name="query" onChange={this.onChange}/> < button onClick = {
            this.onSearch
        } > search < /button>
            </form > </div>
    }
}

export default PeopleSearchForm;
