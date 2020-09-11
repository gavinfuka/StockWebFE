import React, {Component} from "react";

import axios from "axios";
import {TableContainer, TableCell, Table, TableHead, TableBody, TableRow, Paper} from "@material-ui/core";

import Header from "Components/_Base/Header/Header";
import "./Result.css";
import config from "../../_config";

import GTable from "Components/Generic/GTable/GTable";

class Result extends Component {
	constructor(props) {
		super();
		this.state = {data: []};
	}

	static async getDerivedStateFromProps(nextProps, prevState) {
		if (prevState !== nextProps) {
			return nextProps;
		}
	}
	async componentDidMount() {
		let data = await this.fectchData();
		this.setState({data: data});
	}

	fectchData = async () => {
		let ENV = process.env.NODE_ENV;
		let {data} = await axios.get(config.Backend[ENV] + "/Result/SMA/2020-09-11");
		console.log(data);
		return data;
	};

	render() {
		let {data} = this.state;

		return <GTable data={data} />;
	}
}

export default Result;
