import React, { Component } from "react";
import axios from "axios";

import "./style.css";
import "./css/bootstrap.css";
import "./css/flexslider.css";
//import "./css/icomoon.css";
import "./css/magnific-popup.css";
//import "./css/owl.carousel.min.css";
import "./css/style.css";
import Part1 from "./part/Part1";
// export const A = () => <> component A</>;

// trang chinh -> lam de thi
// -> click tab 1 -> call "https://nikaws.cf/api/getpart1/1;
// du lieu fill data
// tab1 -> gui bai -> submit len server {answer : tab 1} -> backend nhan answers -> backend checking ->
// cau tra loi dung chua ->

export default function Execices() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    // IIFE
    setIsLoading(true);
    (async function getExecies() {
      const { data } = await axios.get("https://nikaws.cf/api/getoneexam/1");
      // console.log(data); data = {...}
      setData(data);
      if (data) {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading ....</div>
      ) : (
        <div>
          <div id="fh5co-pricing">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="tab" role="tabpanel">
                    {/* Nav tabs */}
                    <ul className="nav nav-tabs" role="tablist">
                      <li role="presentation" className="active">
                        <a
                          href="#Section1"
                          aria-controls="home"
                          role="tab"
                          data-toggle="tab"
                        >
                          Part 1
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#Section2"
                          aria-controls="profile"
                          role="tab"
                          data-toggle="tab"
                        >
                          Part 2
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#Section3"
                          aria-controls="messages"
                          role="tab"
                          data-toggle="tab"
                        >
                          Part 3
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#Section4"
                          aria-controls="messages"
                          role="tab"
                          data-toggle="tab"
                        >
                          Part 3.2
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#Section5"
                          aria-controls="messages"
                          role="tab"
                          data-toggle="tab"
                        >
                          Part 4
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#Section6"
                          aria-controls="messages"
                          role="tab"
                          data-toggle="tab"
                        >
                          Part 5
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#Section7"
                          aria-controls="messages"
                          role="tab"
                          data-toggle="tab"
                        >
                          Part 6
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#Section8"
                          aria-controls="messages"
                          role="tab"
                          data-toggle="tab"
                        >
                          Part 7
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#Section9"
                          aria-controls="messages"
                          role="tab"
                          data-toggle="tab"
                        >
                          Part 8
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#Section10"
                          aria-controls="messages"
                          role="tab"
                          data-toggle="tab"
                        >
                          Part 9
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#Section11"
                          aria-controls="messages"
                          role="tab"
                          data-toggle="tab"
                        >
                          Part 10
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#Section12"
                          aria-controls="messages"
                          role="tab"
                          data-toggle="tab"
                        >
                          Part 11
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#Section13"
                          aria-controls="messages"
                          role="tab"
                          data-toggle="tab"
                        >
                          Part 12
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#Section14"
                          aria-controls="messages"
                          role="tab"
                          data-toggle="tab"
                        >
                          Part 13
                        </a>
                      </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content tabs">
                      <div
                        role="tabpanel"
                        className="tab-pane fade in active"
                        id="Section1"
                      >
                        {Object.keys(data).length !== 0 && (
                          <Part1 data={data.part1} />
                        )}
                      </div>
                      <div
                        role="tabpanel"
                        className="tab-pane fade"
                        id="Section4"
                      >
                        <div className="container">
                          <div className="row">
                            <div
                              style={{ fontSize: "34px" }}
                              className="title-part"
                            >
                              Part 3.2
                            </div>
                            <p className="des-part">
                              Adding description of this part
                            </p>
                            <img
                              style={{
                                width: "93%",
                                height: "250px",
                                marginBottom: "50px",
                              }}
                              src="images/de1ad.jpg"
                              alt=""
                            />
                          </div>
                          <div className="row">
                            <div className="col-md-6 col-sm-12">
                              <div className="title-if-need">
                                If need, add title here
                              </div>
                              <div className="qes-content mm4">
                                <div className="row">
                                  <div className="col-3">Lợn:</div>
                                  <div className="col-9">
                                    <span>Content of question here</span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-3">Heo:</div>
                                  <div className="col-9">
                                    <span>12:.........</span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-3">Heo:</div>
                                  <div className="col-9">
                                    <span>12:.........</span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-3">Lợn:</div>
                                  <div className="col-9">
                                    <span>Content of question here</span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-3">Lợn:</div>
                                  <div className="col-9">
                                    <span>Content of question here</span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-3">Heo:</div>
                                  <div className="col-9">
                                    <span>12:.........</span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-3">Heo:</div>
                                  <div className="col-9">
                                    <span>12:.........</span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-3">Lợn:</div>
                                  <div className="col-9">
                                    <span>Content of question here</span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-3">Lợn:</div>
                                  <div className="col-9">
                                    <span>Content of question here</span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-3">Heo:</div>
                                  <div className="col-9">
                                    <span>12:.........</span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-3">Heo:</div>
                                  <div className="col-9">
                                    <span>12:.........</span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-3">Lợn:</div>
                                  <div className="col-9">
                                    <span>Content of question here</span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-3">Lợn:</div>
                                  <div className="col-9">
                                    <span>Content of question here</span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-3">Heo:</div>
                                  <div className="col-9">
                                    <span>12:.........</span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-3">Heo:</div>
                                  <div className="col-9">
                                    <span>12:.........</span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-3">Lợn:</div>
                                  <div className="col-9">
                                    <span>Content of question here</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                borderLeft: "1px solid grey",
                                paddingLeft: "40px",
                              }}
                              className="col-md-6 col-sm-12"
                            >
                              <div className="title-if-need">
                                If need, add title here
                              </div>
                              <div
                                className="ans-content-4"
                                style={{ width: "100%" }}
                              >
                                <ol style={{ width: "100%" }} type="A">
                                  <li>Show hang content answer</li>
                                  <li>Show hang content answer</li>
                                  <li>Show hang content answer</li>
                                  <li>Show hang content answer</li>
                                  <li>Show hang content answer</li>
                                  <li>Show hang content answer</li>
                                  <li>Show hang content answer</li>
                                  <li>Show hang content answer</li>
                                </ol>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="title-if-need">
                                Fill your answer:
                              </div>
                              <form className="form-check" action>
                                <ol
                                  type={1}
                                  style={{
                                    width: "100%",
                                    flexDirection: "row",
                                    padding: "0 10px",
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    height: "100px",
                                  }}
                                >
                                  <li>
                                    <input type="text" name id />
                                  </li>
                                  <li>
                                    <input type="text" name id />
                                  </li>
                                  <li>
                                    <input type="text" name id />
                                  </li>
                                  <li>
                                    <input type="text" name id />
                                  </li>
                                  <li>
                                    <input type="text" name id />
                                  </li>
                                  <li>
                                    <input type="text" name id />
                                  </li>
                                  <li>
                                    <input type="text" name id />
                                  </li>
                                </ol>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="fh5co-started"
            style={{ backgroundImage: "url(images/img_bg_2.jpg)" }}
          >
            <div className="overlay" />
            <div className="container">
              <div className="row animate-box">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                  <h2>Lets Get Started</h2>
                  <p>
                    Dignissimos asperiores vitae velit veniam totam fuga
                    molestias accusamus alias autem provident. Odit ab aliquam
                    dolor eius.
                  </p>
                </div>
              </div>
              <div className="row animate-box">
                <div className="col-md-8 col-md-offset-2 text-center">
                  <p>
                    <a href="#" className="btn btn-default btn-lg">
                      Create A Free Course
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
