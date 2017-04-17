import React from 'react';
import {List, Subheader} from 'material-ui';
import PeopleSearchForm from './PeopleSearchForm.jsx';
import Person from './Person.jsx';
import {connect} from 'react-redux';
import {requestPeople, receivePeople, queryPeople} from './../../actions/people'
import axios from 'axios';

class People extends React.Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(requestPeople());
        axios(`/api/users/`).then(response => {
            dispatch(receivePeople(response));
        });
    }

    onSearch(query) {
        const {dispatch} = this.props;
        dispatch(queryPeople(query));
    }

    render() {
        const peopleItems = this.props.showedPeople.map(person => {
            return (<Person key={person.pk} person={person}/>);
        });

        return (
            <div>
                <PeopleSearchForm onSearch={this.onSearch}/>
                <List>
                    <Subheader>People</Subheader>
                    {peopleItems}
                </List>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({people: state.people.people, showedPeople: state.people.showedPeople});

export default connect(mapStateToProps, null)(People);
