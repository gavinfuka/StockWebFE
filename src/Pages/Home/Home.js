import React, { Component } from "react";

import Header from "Components/_Base/Header/Header";
import "./Home.css";

//new modules by Ken
import KHeader from "Components/_Base/KHeader/KHeader";
import KButton from "./KButton/KButton";

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
				<KButton />
			</div>
		);
	}

	render() {
		const { header } = this.state;
		return (
			<div className='Home'>
				<KHeader show={header.show} />
				{this.renderBody()}
				{/* duplicate body to check scroll */}
				{this.renderBody()}
			</div>
		);
	}
}

export default Home;
