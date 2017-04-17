import React from 'react';
import {Menu, MenuItem, Divider} from 'material-ui';
import {Link} from 'react-router';
const items = ['profile', 'feed', 'friends', 'chats', 'people'];

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menuItems = items.map(item => {
            return <MenuItem key={items.indexOf(item)} primaryText={item} value={item} containerElement={< Link to = {
                "/" + item
            }            />}/>;
        });
        return (
            <div style={{
                maxWidth: 150
            }}>

                <Menu>
                    {menuItems}
                </Menu>
            </div>
        );
    }
}

export default Sidebar;
