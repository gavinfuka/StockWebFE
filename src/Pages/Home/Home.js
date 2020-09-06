import React, { Component } from "react";

import Header from "Components/_Base/Header/Header";
import KHeader from "Components/_Base/Header/KHeader";
import KBody from "Components/_Base/Body/KBody";
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
				<KHeader show={showTitle} />
				<KBody />
				<KBody />
			</div>
		);
	}
}

export default Home;
