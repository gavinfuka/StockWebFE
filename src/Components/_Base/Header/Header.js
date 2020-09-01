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
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				this.setState({ show: true });
			} else {
				this.setState({ show: false });
			}
		});
	}
	componentWillUnmount() {
		window.removeEventListener("scroll");
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
