import React from 'react';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import {sendPost} from './../../actions/posts';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.sendPost = this.sendPost.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            content: ''
        }
    }

    sendPost(e) {
        e.preventDefault();
        const {dispatch, sendPost} = this.props;
        const post = {
            content: this.state.content,
            author: `http://localhost:8000/api/users/1/`
        }
        this.props.sendPost(post);
    }

    onChange(e) {
        this.setState({content: e.target.value});
    }
    render() {
        return < div > <h2>Add new post</h2> < form > <textarea value={this.state.content} name="content" onChange={this.onChange}/> < button onClick = {
            this.sendPost
        } > add < /button>
            </form > </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        sendPost
    }, dispatch),
    dispatch
});

const mapStateToProps = (state, props) => ({author : {
    id: '1',
    name: 'Rinat Aynulin',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg',
    information: 'I LOVE CHICKEN'
}});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
