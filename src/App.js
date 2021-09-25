import React, { Component, useEffect } from "react";
import TopMenu from "./Components/Home/topMenu";
import Body from "./Components/Home/body";
import Footer from "./Components/Home/footer";
import axios from "axios";
import { useState } from "react";
import Test from "./Components/LuyenDe/test";
import TestAPI from "./Api/TestAPI";
// import MyComponent from "./Api/TestAPI";
import topMenu from "./Components/Home/topMenu";
import HeaderBlog from "./Components/Blog/HeaderBlog";
import BodyBlog from "./Components/Blog/BodyBlog";
import FooterBlog from "./Components/Blog/FooterBlog";
import { isPromise } from "formik";
import LamDe, { A } from "./Components/LamDeThi";

// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import FooterBlog from './Components/Blog/FooterBlog';

function App() {
  return (
    <div className="App">
      <LamDe />
    </div>
  );
}

export default App;
