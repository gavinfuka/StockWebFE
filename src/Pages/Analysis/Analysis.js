//react
import React, { useState } from "react";

//external libraries
import axios from "axios";

//conpoents
import Header from "./Header/Header";
import GTable from "Components/GTable/GTable";

//config
import config from "../../_config";
import schema from "./schema";

//css
import "./Analysis.scss";
import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from "@material-ui/core/IconButton";

import MongoDB from "../../Components/Database/MongoDB/MongoDB";

const Analysis = ({ cssPrefix }) => {
  const [data, setData] = useState({});

  const fectchData = async () => {
    let db = new MongoDB({
      USERNAME: "admin",
      PASSWORD: "test0000",
      URL: "cluster0.upquf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    });
    let res = await db.List("stock", "vcp");
    setData(res[0].Results);
  };

  fectchData();

  return (
    <div className='Analysis'>
      <Header />

      <div className='body'>
        <div className={cssPrefix + " Date"}>{data._id}</div>
        <GTable data={data} schema={schema.table} cssPrefix={cssPrefix} />
      </div>
    </div>
  );
};

export default Analysis;
