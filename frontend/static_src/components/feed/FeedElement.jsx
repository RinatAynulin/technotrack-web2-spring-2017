import React from 'react';
import {ListItem, Avatar} from 'material-ui';

class FeedElement extends React.Component {
    render() {
        return (
            <div>
                <ListItem leftAvatar={< Avatar src = {
                    "https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg"
                }/>} primaryText={this.props.event.title}/>
            </div>
        );
    }
}

export default FeedElement;
