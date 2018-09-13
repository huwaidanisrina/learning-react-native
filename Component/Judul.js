import React from 'react';
import {Text} from 'react-native';

export default class Judul extends React.Component{
	render(){
		return (
				<Text style={salon.judul}> {this.props.judul} </Text>
				)
	}
}

const salon = {
	Judul: {
		color: '#f00',
		fontSize: 50
		background:50,
	}
}