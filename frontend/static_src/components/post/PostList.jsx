import React from 'react';
import Post from './Post.jsx';

import {List, ListItem, Avatar, Subheader} from 'material-ui';
import ReactModal from 'react-modal';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './modal.css'


import {changeSelectedPost, openModal, closeModal} from './../../actions/modal';

class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.findId = this.findId.bind(this);
    }

    handleCloseModal() {
        const {dispatch} = this.props;
        dispatch(closeModal());
    }

    handleClick(index) {
        console.log(index);
        const {dispatch} = this.props;
        dispatch(changeSelectedPost(index));
        dispatch(openModal());
    }

    findId(element) {
        console.log(`from modal: ${element.pk}`);
        return element.pk == this.props.selectedIndex;
    }

    render() {
        const posts = this.props.posts.map(post => {
            return <Post key={post.pk} handleClick={this.handleClick} postInformation={post}/>;
        });
        return (
            <div>
                <div>
                    <ReactModal className="modal-content" isOpen={this.props.showModal} contentLabel="Minimal Modal Example">

                         <Post postInformation={this.props.posts.find(this.findId)}/>

                        <button onClick={this.handleCloseModal}>Close Modal</button>
                    </ReactModal>
                </div>

                <List style={{
                    maxWidth: 600
                }}>
                    <Subheader>My posts</Subheader>

                    {posts}
                </List>
            </div>

        );

    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        openModal, closeModal, changeSelectedPost
    }, dispatch),
    dispatch
});

const mapStateToProps = (state, props) => ({
    posts: state.posts.posts,
    showModal: state.modal.showModal,
    selectedIndex: state.modal.selectedIndex,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
