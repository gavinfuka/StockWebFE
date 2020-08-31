import React, { Component } from "react";

import "Assets/css/Body.css";

class Body extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Title: {
				FirstRow: "Your AI ",
				SecondRow: "Investment Advisor",
			},
		};
	}
	render() {
		let { Title } = this.state;
		return (
			<div className='body'>
				<div className='body-caption'>
					<div className='body-caption-row'>
						<div id='Your'>{Title.FirstRow.split(" ")[0]}</div>
						<div id='AI'>{Title.FirstRow.split(" ")[1]} </div>
					</div>
					<div>{Title.SecondRow}</div>
				</div>

				<div className='body-font-sndrow'></div>
			</div>
		);
	}
}

export default Body;
