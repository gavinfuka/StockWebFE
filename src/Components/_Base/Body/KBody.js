import React, { Component } from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import "Components/_Base/Body/Body.css";
import styles from "./KBodyStyle.js";
const useStyles = makeStyles(styles);

export default function KBody () {
  const classes = useStyles();

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     Title: {
  //       FirstRow: "Your AI ",
  //       SecondRow: "Investment Advisor",
  //     },
  //   };
  // }

  const [title, setTitle] = React.useState({
    firstRow: "Your AI ",
    secondRow: "Investment Advisor"
  });
  
	return (
    <div className='body'>
      <div className='body-caption'>
        <div className='body-caption-row'>
          <div id='Your'>{title.firstRow.split(" ")[0]}</div>
          <div id='AI'>{title.firstRow.split(" ")[1]} </div>
        </div>
        <div>{title.secondRow}</div>
        <div>
          <Button className={classes.bodyBtn} variant="contained">
            Fexpert's Choice
          </Button>
        </div>
      </div>

      <div className='body-font-sndrow'></div>
    </div>
  )
}