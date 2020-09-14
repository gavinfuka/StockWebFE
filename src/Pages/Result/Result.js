//react
import React, {Component} from "react";

//external libraries
import axios from "axios";

//conpoents
import Header from "Components/_Base/Header/Header";
import GTable from "Components/Generic/GTable/GTable";

//config
import config from "../../_config";
import schema from "./schema";

//css
import "./Result.css";
import {Container} from "@material-ui/core";

class Result extends Component {
	constructor(props) {
		super();
		this.state = {
			cssPrefix: "result",
			data: [],
		};
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
		return data;
	};

	render() {
		let {cssPrefix, data} = this.state;
		console.log(schema);
		return (
			<div className={cssPrefix}>
				<Header cssPrefix={cssPrefix} />
				<div className={cssPrefix + " Date"}>{data._id}</div>
				<GTable data={data} schema={schema.table} cssPrefix={cssPrefix} />
			</div>
		);
	}
}

export default Result;
