import React, {Component} from "react";
import {NavLink, Link} from "react-router-dom";

//icon
import TuneIcon from "@material-ui/icons/Tune";
import IconButton from "@material-ui/core/IconButton";

//css
import "./Header.css";

class Header extends Component {
	constructor() {
		super();
		this.state = {
			cssPrefix: "",
			show: false,
		};
	}

	static getDerivedStateFromProps(nextProps, prevStat) {
		if (prevStat !== nextProps) {
			return {...prevStat, nextProps};
		}
	}

	//scrollto show header
	componentDidMount() {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				this.setState({show: true});
			} else {
				this.setState({show: false});
			}
		});
	}
	componentWillUnmount() {
		window.removeEventListener("scroll", []);
	}

	render() {
		const {show, cssPrefix} = this.state;

		return (
			<div className={show ? cssPrefix + " nav show" : cssPrefix + " nav"}>
				{/* Icon */}

				<div>
					<NavLink to=''>
						<img className={cssPrefix + " nav Fexpert"} src='Images/Logo.png' alt='Fexpert' />
					</NavLink>
				</div>

				{/* Button */}
				<IconButton>
					<TuneIcon fontSize='large' className=' header-icon' />
				</IconButton>
			</div>
		);
	}
}

export default Header;
