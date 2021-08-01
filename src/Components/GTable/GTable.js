import React, { Component } from "react";
import _ from "lodash";

import { TableContainer, TableCell, Table, TableHead, TableBody, TableRow, Paper, Card } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

//
import Accessor from "_base/Accessor";

import "./GTable.scss";

const styles = (theme) => ({});
class GTable extends Component {
  constructor(props) {
    super();
    this.state = {
      cssPrefix: "",
      data: {},
      schema: [],
      styles: {
        TableHead: {},
        TableBody: {},
      },
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState !== nextProps) {
      return nextProps;
    }
    return null;
  }

  renderTitle() {
    let { schema } = this.state;
    let titles = _.map(schema, (o) => o.Header);
    return <TableRow>{this.renderCells(titles)}</TableRow>;
  }

  renderBody() {
    let { schema, data } = this.state;
    let Rows = [];
    let cols = _.map(schema, (o) => {
      let res = Accessor.Get(data, o.accessor);
      return res;
    });

    let rows = _.zip(...cols);

    for (let row of rows) {
      Rows.push(<TableRow key={row[0]}>{this.renderCells(row)}</TableRow>);
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
      <div className={" GTable"}>
        <TableContainer component={Paper} class={"TableContainer"}>
          <Table stickyHeader={true}>
            <TableHead class='TableHead'>{this.renderTitle()}</TableHead>
            <TableBody>{this.renderBody()}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default withStyles(styles)(GTable);
