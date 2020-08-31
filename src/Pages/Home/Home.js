import React, { Component } from "react";

import Header from "Components/Base/Header/Header";
import Body from "Components/Base/Body/Body";
import "Pages/Home/Home.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Title: "Stock Project",
			showTitle: false,
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				this.setState({ showTitle: true });
			} else {
				this.setState({ showTitle: false });
			}
		});
	}
	componentWillUnmount() {
		window.removeEventListener("scroll");
	}

	render() {
		const { showTitle } = this.state;
		return (
			<div className='home'>
				<Header show={showTitle} />
				<Body />
				<Body />
			</div>
		);
	}
}

export default Home;
