//react
import React, { useState } from "react";

//external libraries

//conpoents
import Header from "./Header/Header";
import GTable from "Components/GTable/GTable";

//config
import schema from "./schema";

//css
import "./Analysis.scss";

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
    debugger;
    setData(res[0]);
  };

  fectchData();

  return (
    <div className='Analysis'>
      <Header />
      <div className='body'>
        <h2 className={"Date"}>{data && data._id}</h2>
        <GTable key={1} data={data && data.Results} schema={schema.table} cssPrefix={cssPrefix} />
      </div>
    </div>
  );
};

export default Analysis;
