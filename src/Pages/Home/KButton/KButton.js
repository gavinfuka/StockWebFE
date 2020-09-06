import React, { Component } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "./KButtonStyle.js";
const useStyles = makeStyles(styles);

export default function KButton() {
	const classes = useStyles();

	return (
		<Button className={classes.bodyBtn} variant='contained'>
			Fexpert's Choice
		</Button>
	);
}
