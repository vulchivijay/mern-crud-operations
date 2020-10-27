import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
//import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class CustomersTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteCustomer = this.deleteCustomer.bind(this);
  }

  deleteCustomer(e) {
    e.preventDefault()
    axios.delete('http://localhost:4000/nokiadb/delete/' + this.props.obj._id)
        .then((res) => {
          console.log('Successfully deleted!')
        }).catch((error) => {
          console.log(error)
        })
    // Redirect to Student List 
    // this.props.history.push('/customers')
  }

  render() {
    return (
      <TableRow>
        <TableCell> {this.props.obj.name} </TableCell>
        <TableCell> {this.props.obj.email} </TableCell>
        <TableCell> {this.props.obj.mobile} </TableCell>
        <TableCell>
          <Link className="edit-link" to={"/edit/" + this.props.obj._id}>Edit</Link>
          <Link className="delete-link" onClick={this.deleteCustomer}>Delete</Link>
        </TableCell>
      </TableRow>
    );
  }
}