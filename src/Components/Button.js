import React, { Component } from 'react';
import '../Css/Button.css';

class Button extends Component {
	render() {
		var name = this.props.name;
		return (
			<a href="#"> {name} </a>
		);
	}
}
export default Button;