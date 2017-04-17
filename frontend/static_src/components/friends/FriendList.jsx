import React from 'react';

import {List, ListItem, Divider, Subheader, Avatar} from 'material-ui';

class FriendList extends React.Component {
    render() {
        const friendsElements = this.props.friends.map(friend => {
            return <ListItem key={friend.id} primaryText={friend.name} leftAvatar={< Avatar src = {
                friend.avatarUrl
            } />}/>
        });

        const requestElements = this.props.friendsRequests.map(friend => {
            return <ListItem key={friend.id} primaryText={friend.name} leftAvatar={< Avatar src = {
                friend.avatarUrl
            } />}/>
        });

        return (
            <div>
                <List>
                    <Subheader>My friends</Subheader>
                    {friendsElements}
                    <Divider/>
                    <Subheader>Requests</Subheader>
                    {requestElements}
                </List>
            </div>
        );
    }
}

export default FriendList;
