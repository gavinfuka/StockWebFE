import React, {Component} from "react";
import _ from "lodash";

import {TableContainer, TableCell, Table, TableHead, TableBody, TableRow, Paper} from "@material-ui/core";

class GTable extends Component {
	static defaultProps = {
		cssPrefix: "",
		data: "",
		Titles: [],
		Rows: [],
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		if (prevState !== nextProps) {
			return nextProps;
		}
	}

	renderTitle() {
		let titles = Object.keys(this.state.data);
		return this.renderCells(titles);
	}

	renderRow() {
		let Rows = [];

		let cols = Object.values(this.state.data);
		let rows = _.zip(...cols);

		for (let row of rows) {
			Rows.push(<TableRow>{this.renderCells(row)}</TableRow>);
		}

		return Rows;
	}

	renderCells(list) {
		let Cells = [];
		for (let ele of list) {
			Cells.push(<TableCell> {ele}</TableCell>);
		}
		return Cells;
	}

	render() {
		return (
			<div>
				<TableContainer component={Paper}>
					<Table aria-label='simple table'>
						<TableHead>
							<TableRow>{this.renderTitle()}</TableRow>
						</TableHead>
						<TableBody>{this.renderRow()}</TableBody>
					</Table>
				</TableContainer>
			</div>
		);
	}
}

export default GTable;
