import React from 'react';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';

class SidebarItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.onUpdateSidebar = props.onUpdateSidebar(props.item);
  }
  render() {
    return <MenuItem primaryText={props.item}/>;
  }
}

export default SidebarItem;
