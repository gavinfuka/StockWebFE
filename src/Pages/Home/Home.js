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
			Caption: {
				FirstRow: "Your AI ",
				SecondRow: "Investment Advisor",
				show: true,
			},
		};
	}

	render() {
		const { header, Caption } = this.state;
		return (
			<div className='Home'>
				<Header show={this.state.header.show} />

				<div className='body'>
					<div className='body-caption'>
						<div className='body-caption-row'>
							<div id='Your'>{Caption.FirstRow.split(" ")[0]}</div>
							<div id='AI'>{Caption.FirstRow.split(" ")[1]} </div>
						</div>
						<div>{Caption.SecondRow}</div>
					</div>

					<div className='body-font-sndrow'></div>
				</div>

				<div className='body'>
					<div className='body-caption'>
						<div className='body-caption-row'>
							<div id='Your'>{Caption.FirstRow.split(" ")[0]}</div>
							<div id='AI'>{Caption.FirstRow.split(" ")[1]} </div>
						</div>
						<div>{Caption.SecondRow}</div>
					</div>

					<div className='body-font-sndrow'></div>
				</div>
			</div>
		);
	}
}

export default Home;
