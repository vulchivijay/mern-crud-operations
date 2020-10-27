import React, { Component } from "react";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class CreateCustomer extends Component {

  constructor(props) {
	super(props)
	// Setting up functions
	this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
	this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
	this.onChangeCustomerMobile = this.onChangeCustomerMobile.bind(this);
	this.onSubmit = this.onSubmit.bind(this);

	// Setting up state
	this.state = {
	  name: '',
	  email: '',
	  mobile: ''
	}
  }

  onChangeCustomerName(e) {
		this.setState({name: e.target.value})
  }

	onChangeCustomerEmail(e) {
		this.setState({email: e.target.value})
	}

	onChangeCustomerMobile(e) {
		this.setState({mobile: e.target.value})
	}

	onSubmit(e) {
		e.preventDefault()

		const customerObject = {
			name: this.state.name,
			email: this.state.email,
			mobile: this.state.mobile
		};

		console.log("customer data: ", customerObject);

		axios.post('http://localhost:4000/nokiadb/new', customerObject)
		.then(res => console.log(res.data));  

		this.setState({name: '', email: '', mobile: ''})
	}

	render() {
		return (<div className="form-wrapper">
			<form onSubmit={this.onSubmit} noValidate autoComplete="off">
				<FormControl>
					<TextField type="text" value={this.state.name} onChange={this.onChangeCustomerName} label="Enter customer name" />
				</FormControl>
				<FormControl>
					<TextField type="email" value={this.state.email} onChange={this.onChangeCustomerEmail} label="Enter customer email" />
				</FormControl>
				<FormControl>
					<TextField type="number" value={this.state.mobile} onChange={this.onChangeCustomerMobile} label="Enter customer mobile" />
				</FormControl>
				<Button variant="contained" color="primary" type="submit">Add</Button>
			</form>
		</div>);
	}
}