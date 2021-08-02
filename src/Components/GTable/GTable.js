import React, { Component } from "react";
import _ from "lodash";

import { TableContainer, TableCell, Table, TableHead, TableBody, TableRow, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

//
import Accessor from "_base/Accessor";

import "./GTable.scss";

const styles = (theme) => ({});
class GTable extends Component {
  constructor(props) {
    super();
    this.state = {
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

    rows = _.uniqBy(rows, (o) => {
      return o[0];
    });

    for (let row of rows) {
      Rows.push(<TableRow key={row[0]}>{this.renderCells(row)}</TableRow>);
    }

    return Rows;
  }

  renderCells(list) {
    let Cells = [];
    let i = 0;
    for (let ele of list) {
      Cells.push(<TableCell key={i++}> {ele}</TableCell>);
    }
    return Cells;
  }

  render() {
    return (
      <div className={" GTable"}>
        <TableContainer component={Paper} className={"TableContainer"}>
          <Table stickyHeader={true}>
            <TableHead className='TableHead'>{this.renderTitle()}</TableHead>
            <TableBody>{this.renderBody()}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default withStyles(styles)(GTable);
