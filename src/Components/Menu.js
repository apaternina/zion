import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from './Button';
import '../Css/Menu.css';
var MenuIcon = require('react-icons/lib/fa/beer');

class Menu extends Component {
	render () {
		let items = this.props.items.map(function(item, i){
			return <Button key={'item-'+i} name={ item } />
		});

		return (
			<Col lg={10} md={10} xs={9} >
				<Col className="App-content-button hidden-xs hidden-sm hidden-md">
		            { items }
		        </Col>
		        <div>
		        	<MenuIcon />
		        </div>
		    </Col>
		);
	}
}

export default Menu;