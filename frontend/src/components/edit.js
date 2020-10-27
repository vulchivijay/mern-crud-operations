// import React, { Component } from "react";
// //import Form from 'react-bootstrap/Form'
// //import Button from 'react-bootstrap/Button';
// import axios from 'axios';

// export default class EditCustomer extends Component {

//   constructor(props) {
//     super(props)

//     this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
//     this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
//     this.onChangeCustomerMobile = this.onChangeCustomerMobile.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     // State
//     this.state = {
//       name: '',
//       email: '',
//       mobile: ''
//     }
//   }

//   componentDidMount() {
//     axios.get('http://localhost:4000/nokiadb/edit/' + this.props.match.params.id)
//       .then(res => {
//         this.setState({
//           name: res.data.name,
//           email: res.data.email,
//           mobile: res.data.mobile
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

//   onChangeCustomerName(e) {
//     this.setState({ name: e.target.value })
//   }

//   onChangeCustomerEmail(e) {
//     this.setState({ email: e.target.value })
//   }

//   onChangeCustomerMobile(e) {
//     this.setState({ rollno: e.target.value })
//   }

//   onSubmit(e) {
//     e.preventDefault()

//     const customerObject = {
//       name: this.state.name,
//       email: this.state.email,
//       mobile: this.state.mobile
//     };

//     axios.put('http://localhost:4000/nokiadb/update/' + this.props.match.params.id, customerObject)
//       .then((res) => {
//         console.log(res.data)
//         console.log('Successfully updated')
//       }).catch((error) => {
//         console.log(error)
//       })

//     // Redirect to Student List 
//     this.props.history.push('/customers')
//   }


//   render() {
//     return (<div className="form-wrapper">
//       <Form onSubmit={this.onSubmit}>
//         <Form.Group controlId="Name">
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" value={this.state.name} onChange={this.onChangeCustomerName} />
//         </Form.Group>

//         <Form.Group controlId="Email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" value={this.state.email} onChange={this.onChangeCustomerEmail} />
//         </Form.Group>

//         <Form.Group controlId="Name">
//           <Form.Label>Roll No</Form.Label>
//           <Form.Control type="number" value={this.state.mobile} onChange={this.onChangeCustomerMobile} />
//         </Form.Group>

//         <Button variant="danger" size="lg" block="block" type="submit">
//           Update customer
//         </Button>
//       </Form>
//     </div>);
//   }
// }