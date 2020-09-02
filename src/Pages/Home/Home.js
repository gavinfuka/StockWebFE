import React, { Component } from "react";

import Header from "Components/_Base/Header/Header";
import "./Home.css";

class Home extends Component {
	static defaultProps = {
		cssPrefix: "",
		header: {
			show: false,
		},
		Tagline: {
			FirstRow: "Discover the Next Tesla",
			SecondRow: "Invest with Fexpert AI",
			show: true,
		},
		Button: {
			Text: "Daily Recommandation",
		},
	};

	static getDerivedStateFromProps(nextProps, prevStat) {
		if (prevStat !== nextProps) {
			return {
				...nextProps,
			};
		}
	}

	renderBody() {
		const { cssPrefix, Tagline, Button } = this.state;
		return (
			<div className={cssPrefix + " home-body"}>
				<div className={cssPrefix + " home-tagline"}>
					<h1>{Tagline.FirstRow}</h1>
					<h6>{Tagline.SecondRow}</h6>
				</div>

				{/* button */}
				<div className={cssPrefix + " home-button"}>
					<button>{Button.Text}</button>
				</div>
			</div>
		);
	}

	render() {
		const { header } = this.state;
		return (
			<div className='Home'>
				<Header show={header.show} />
				{this.renderBody()}
				{this.renderBody()}
			</div>
		);
	}
}

export default Home;
