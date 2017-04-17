import React from 'react';

class UserInformation extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.user.name}</h2>
                <p>{this.props.user.information}</p>
            </div>

        );
    }
}

export default UserInformation;
