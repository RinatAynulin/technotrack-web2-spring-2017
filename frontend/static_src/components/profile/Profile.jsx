import React from 'react';

import {Grid, Col} from 'react-bootstrap';
import {Avatar} from 'material-ui';
import {receivePosts, requestPosts} from './../../actions/posts';

import UserInformation from './UserInformation.jsx';
import PostList from './../post/PostList.jsx';
import PostForm from './../post/PostForm.jsx';
import {connect} from 'react-redux';

import axios from 'axios';

const user = {
    id: '1',
    name: 'Rinat Aynulin',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg',
    information: 'I LOVE CHICKEN'
}

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.user = user;
        this.onCreate = this.onCreate.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(requestPosts());
        axios(`/api/posts/`).then(response => dispatch(receivePosts(response)));
    }

    onCreate(post) {
        console.log('oncreate');
        post = {
            id: this.props.posts.length,
            content: post.content,
            user: this.user
        }
    }

    render() {
        return (
            <div>
                <Grid>
                    <Col xs={4} md={4}>
                        <Avatar src={this.user.avatarUrl} size={200}/>
                    </Col>

                    <Col xs={12} md={6}>
                        <div>
                            <UserInformation user={this.user}/>
                        </div>
                    </Col>
                </Grid>

                <Grid>

                    <PostList/>

                    <PostForm onCreate={this.onCreate}/>

                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({posts: state.posts.posts});

export default connect(mapStateToProps, null)(Profile);
