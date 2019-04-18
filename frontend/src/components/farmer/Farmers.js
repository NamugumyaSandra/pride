import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { getFarmers, deleteFarmer } from '../../actions/farmers'


class Farmers extends Component {
  static propTypes = {
    farmers: PropTypes.array.isRequired,
    getFarmers: PropTypes.func.isRequired,
    deleteFarmer: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getFarmers();
  }
  render() {
    return (
      <Fragment>
        <h1 className="mt-4">Farmers</h1>
        <hr />
        <table className="table table-bordered table-hover table-reponsive-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>GENDER</th>
              <th>PHONE NUMBER</th>
              <th />
            </tr>
          </thead>
          <tbody> 
            {this.props.farmers.map(farmer => (
              <tr key={farmer.id}>
                <td>{farmer.id}</td>
                <td>{farmer.username}</td>
                <td>{farmer.gender}</td>
                <td>{farmer.phone}</td>
                <td>
                <button onClick ={this.props.deleteFarmer.bind(this,farmer.id)} 
                className='btn btn-danger btn-sm mr-3'>
                Delete
                </button>
                <button className='btn btn-info btn-sm'>Edit</button>
                </td>
              </tr>
            ))}
          </tbody> 
        </table>
      </Fragment>
    );
  };
}

const mapStateToProps = state => ({
  farmers: state.farmers.farmers
});

export default connect(mapStateToProps,{getFarmers, deleteFarmer})(Farmers);