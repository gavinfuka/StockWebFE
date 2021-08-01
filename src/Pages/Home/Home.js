import React, { Component } from "react";
import "./Home.scss";

//new modules by Ken
import KHeader from "./KHeader/KHeader";

import Birds from "./Birds";
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
      <div className={"body"}>
        <h1>{Tagline.FirstRow}</h1>
        <h6>{Tagline.SecondRow}</h6>
        <button type='button'>Begin</button>
      </div>
    );
  }

  render() {
    const { header } = this.state;
    return (
      <div className='Home'>
        <KHeader show={header.show} />
        <Birds />
        {this.renderBody()}
      </div>
    );
  }
}

export default Home;
