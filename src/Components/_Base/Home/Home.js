import React, { Component } from "react";

import Header from "./Header/Header";
import Body from "./Body/Body";
import "./Home.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Stock Project",
		};
	}
	render() {
		return (
			<div className='home'>
				<Header />
				<Body />
			</div>
		);
	}
}

export default Home;
