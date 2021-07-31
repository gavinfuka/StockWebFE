import React from "react";
import ReactDOM from "react-dom";

//dynnamic router
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Home Page
import Home from "./Pages/Home/Home";

//Pages
import Table from "./Pages/Table/Table";

//css
import "./index.css";

ReactDOM.render(
  // <Provider store={store}>
  // <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter>
    {/* <Container> */}
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Table' exact component={Table} />
      {/* <Route component={NoMatch} /> */}
    </Switch>
    {/* </Container> */}
  </BrowserRouter>,
  // </PersistGate>
  // </Provider>,
  document.getElementById("root")
);
