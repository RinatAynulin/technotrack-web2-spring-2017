import React from 'react';
import {ListItem, Avatar} from 'material-ui';

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.person = props.person;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        /*
        this.props.handleClick(this.post.id);
        */
    }

    render() {
        return (
            <ListItem leftAvatar={< Avatar src = {
                'https://i.stack.imgur.com/4ZiTt.jpg?s=328&g=1'
            } />} primaryText={`${this.person.first_name} ${this.person.last_name}`} onClick={this.handleClick}/>
        );
    }
}

export default Person;
