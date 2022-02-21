import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Layout from "views/layouts";
import Path from "views/pages/path";
import Home from "views/pages/home";
import Network from "views/pages/network";
import Paper from "views/pages/paper";
import PathDetail from "views/pages/path/form/PathDetail";
import TestNet from "views/pages/testnet";
import Chart from "views/pages/chart";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="path" element={<Path />} />
          <Route path="path/detail" element={<PathDetail />} />
          <Route path="network" element={<Network />} />
          <Route path="paper" element={<Paper />} />
          <Route path="testnet" element={<TestNet />} />
          <Route path="chart" element={<Chart />} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
