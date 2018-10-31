import React, { Component } from 'react';

import { Button, Form} from 'semantic-ui-react';

class Login extends Component {
	constructor(){
		super();

		this.state={
			username: '',
			password: ''
		}
	}
	handleInput = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})	
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleLogin(this.state.username)	
	}
	render(){
		return(
			<Form onSubmit={this.handleSubmit}>
				<Form.Input fluid icon='user' iconPosition='left' type='text' name='username' onChange={this.handleInput} value={this.state.username} placeholder='trainer name' />
				<Form.Input fluid icon='lock' iconPosition='left' type='password' name='password' onChange={this.handleInput} value={this.state.password} placeholder='password' />
				<Button color='red' fluid size='medium' type='Submit'>Login</Button>
			</Form>
		)
	}
}
export default Login;
