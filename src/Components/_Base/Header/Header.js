import React, {Component} from "react";

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
		window.removeEventListener("scroll");
	}

	render() {
		const {show, cssPrefix} = this.state;

		return (
			<div className={show ? cssPrefix + " nav nav-show" : cssPrefix + " nav"}>
				{/* Icon */}
				<IconButton>
					<div className={cssPrefix + " header-fexpert-logo"}>
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
