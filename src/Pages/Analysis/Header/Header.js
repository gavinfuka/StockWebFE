import React, { Component } from "react";
import { NavLink } from "react-router-dom";

//icon
import TuneIcon from "@material-ui/icons/Tune";
import IconButton from "@material-ui/core/IconButton";

//css
import "./Header.scss";

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
      return { ...prevStat, nextProps };
    }
  }

  //scrollto show header
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
    window.removeEventListener("scroll", []);
  }

  render() {
    const { show } = this.state;

    return (
      <div className={"nav" + (show ? " show" : "")}>
        <NavLink to=''>
          <img className={"header-fexpert-logo"} src='Images/Logo.png' alt='Fexpert' />
        </NavLink>

        <IconButton className={"icon-button" + (show ? " show" : "")}>
          <TuneIcon fontSize='large' />
        </IconButton>
      </div>
    );
  }
}

export default Header;
