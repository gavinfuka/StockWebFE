import React, { Component } from "react";

//icon
import TuneIcon from "@material-ui/icons/Tune";
import IconButton from "@material-ui/core/IconButton";

//css
import "./Header.css";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: props.show,
		};
	}

	componentDidMount() {
		this.setState({
			show: this.props.show,
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps !== this.props) {
			this.componentDidMount();
		}
	}

	render() {
		return (
			<div className={this.state.show ? "nav nav-show" : "nav"}>
				{/* Icon */}
				<IconButton>
					<div className='header-fexpert-logo'>
						<img draggable='false' className='header-fexpert-logo' src='Images/Logo.png' alt='Fexpert' />
					</div>
				</IconButton>

				{/* Button */}
				<IconButton>
					<TuneIcon fontSize='large' className='header-icon' />
				</IconButton>
			</div>
		);
	}
}

export default Header;
