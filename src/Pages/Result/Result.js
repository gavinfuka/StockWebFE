import React, { Component } from "react";

import Header from "Components/_Base/Header/Header";
import "./Result.css";

class Result extends Component {
	constructor(props) {
		super(props);
		this.state = {
			header: {
				show: true,
			},
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
		const { header } = this.state;
		return (
			<div>
				<Header show={header.show}></Header>
			</div>
			// <div className='Result'>
			// 	<Header show={Header.show} />
			// </div>
		);
	}
}

export default Result;
