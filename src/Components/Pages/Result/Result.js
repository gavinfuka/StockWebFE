import React, { Component } from "react";
import axios from "axios";
class Stock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Stock Project",
		};
	}

	componentDidMount() {
		this.GetData();
	}

	GetData = async () => {
		let { data } = await axios.get("http://localhost:5000/raw");
		console.table(data);
		this.state.data = data;
	};

	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				{this.state.data}
			</div>
		);
	}
}

export default Stock;
