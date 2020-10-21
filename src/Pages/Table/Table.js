//react
import React, { Component } from "react";

//external libraries
import axios from "axios";

//conpoents
import Header from "Components/_Base/Header/Header";
import KHeader from "Components/_Base/KHeader/KHeader";
import GTable from "Components/Generic/GTable/GTable";

//config
import config from "../../_config";
import schema from "./schema";

//css
import "./Table.css";
import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from "@material-ui/core/IconButton";
class Table extends Component {
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
        this.setState({ data: data });
    }

    fectchData = async () => {
        let ENV = process.env.NODE_ENV;
        let { data } = await axios.get(config.Backend[ENV] + "/Result/SMA");
        return data;
    };

    Refresh = async () => {
        let ENV = process.env.NODE_ENV;
        let { data } = await axios.get(config.Backend[ENV] + "/Analyse/SMA");
        return data;
    };

    renderRefreshBut = () => {
        return (
            <IconButton onClick={this.Refresh}>
                <RefreshIcon />
            </IconButton>
        );
    };

    render() {
        let { cssPrefix, data } = this.state;
        // console.log(schema);
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <div className={cssPrefix + " Date"}>{data._id}</div>
                    {this.renderRefreshBut()}
                    <GTable data={data} schema={schema.table} cssPrefix={cssPrefix} />
                </div>
            </div>
        );
    }
}

export default Table;
