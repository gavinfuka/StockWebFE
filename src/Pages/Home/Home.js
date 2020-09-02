import React, { Component } from "react";

import Header from "Components/_Base/Header/Header";
import "./Home.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			header: {
				show: false,
			},
			Tagline: {
				FirstRow: "Find the Next Tesla",
				SecondRow: "More Profit",
				show: true,
			},
		};
	}

	render() {
		const { header, Tagline } = this.state;
		return (
			<div className='Home'>
				<Header show={header.show} />

				<div className='home-body'>
					<div className='home-tagline'>
						<div className='home-tagline-row'>
							<div>{Tagline.FirstRow}</div>
						</div>
					</div>

					<div className='home-button'>
						<button>Daily Recommandation</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
