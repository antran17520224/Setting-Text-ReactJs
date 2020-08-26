import React, { Component } from 'react';

class Reset extends Component {

	onResetDefault = () => {
		this.props.onSettingDefault(true)
	}
	render(){
		return (
			<button 
			type="reset" 
			className="btn btn-primary"
			onClick={this.onResetDefault}
			>Reset
			</button>
		);
	}
}

export default Reset;
