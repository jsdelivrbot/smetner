import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editItem, newItemCreate } from '../actions';
import { Link } from 'react-router';

class ListEdit extends Component {
    constructor(props) {
        super(props);

        this.state = { goods: '' };
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }

    componentWillMount() {

        if (this.props.params.id) {
            this.setState({goods: this.props.itemStore.goods});
        }
    }

    onSubmitHandle(event) {
        event.preventDefault();

        if (this.props.params.id) {
            this.props.editItem(this.props.params.id, this.state.goods);
        } else {
            this.props.newItemCreate(this.state.goods);
        }
        this.setState({goods: ''});
    }

    render() {

        return (
            <div>
                <Link to='/'>
                    <span className="btn btn-primary btn-go-back">Go back</span>
                </Link>
                <form onSubmit={this.onSubmitHandle}>
                    <label htmlFor="goodsItem">Goods: </label>
                    <input type="text" value={this.state.goods}
                           id="goodsItem"
                           className="form-control"
                           onChange={(e) => this.setState({goods: e.target.value})}/>
                    <input type="submit" className="btn btn-success" value="Save"/>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        list: state.lists,
        itemStore: state.lists.itemStore
    }
}

export default connect(mapStateToProps, { editItem, newItemCreate })(ListEdit);