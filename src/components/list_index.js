import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveItemToStore, deleteItem } from '../actions';
import { Link } from 'react-router';

class ListIndex extends Component {
    constructor(props) {
        super(props);

    }

    renderList() {

        if (this.props.list === '') {
            return <div>Loading...</div>
        }

        return this.props.list.map(value => {
            return (
                <li className="list-group-item" key={value.id} >
                    <strong>{value.goods}</strong>
                    <Link to={`list/edit/${value.id}`}>
                        <div className="btn btn-primary pull-xs-right"
                              onClick={() => this.props.saveItemToStore(value)}>Edit</div>
                    </Link>
                    <div className="btn btn-danger pull-xs-right"
                          onClick={() => this.props.deleteItem(value.id)} >Remove</div>
                </li>
            )
        })
    }

    render() {

        return (
            <div>

                <div>
                    <Link to={`list/add`}>
                        <span className="btn btn-primary btn-add">Add</span>
                    </Link>
                </div>

                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {list: state.lists.all}
}

export default connect(mapStateToProps, { saveItemToStore, deleteItem })(ListIndex);