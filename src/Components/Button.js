import React, { Component } from 'react';

class Button extends Component {
	render() {
		var icon = this.props.icon;
		return (
			<a src={icon} />
		);
	}
}
export default Button;