import React from 'react';
import {ListItem, Avatar} from 'material-ui';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.handleClick(this.props.postInformation.pk);
    }

    render() {
        return (
            <div>
            <ListItem leftAvatar={< Avatar src = {
                'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg'
            } />} primaryText={this.props.postInformation.content} onClick={this.handleClick}/>
            </div>
        );
    }
}

export default Post;
