import React, { Component } from "react";

import Sticky from "../../../Generic/Sticky/Sticky";

//icon
import TuneIcon from "@material-ui/icons/Tune";
import IconButton from "@material-ui/core/IconButton";

//css
import "./Header.css";

class Header extends Component {
	render() {
		return (
			<div className='header'>
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
