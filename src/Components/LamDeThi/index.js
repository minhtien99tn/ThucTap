import React, { Component } from "react";
import "./style.css";
import "./css/bootstrap.css";
import "./css/flexslider.css";
//import "./css/icomoon.css";
import "./css/magnific-popup.css";
//import "./css/owl.carousel.min.css";
import "./css/style.css";

export default function index() {
  return (
    <div>
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
                      <div className="container">
                        <div className="row">
                          <div
                            style={{ fontSize: "34px" }}
                            className="title-part"
                          >
                            Part 1
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
                            <div className="qes-content">
                              <ol type={1}>
                                <li>You must drive carefully here</li>
                                <li>You can eat cheaply here.</li>
                                <li>You can stay here on holiday.</li>
                                <li>You can find work here.</li>
                                <li>You must not go in this way.</li>
                              </ol>
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
                              className="ans-content"
                              style={{ width: "100%" }}
                            >
                              <ol style={{ width: "100%" }} type="A">
                                <li>
                                  <img src alt="" />
                                </li>
                                <li>
                                  <img src alt="" />
                                </li>
                                <li>
                                  <img src alt="" />
                                </li>
                                <li>
                                  <img src alt="" />
                                </li>
                                <li>
                                  <img src alt="" />
                                </li>
                                <li>
                                  <img src alt="" />
                                </li>
                                <li>
                                  <img src alt="" />
                                </li>
                                <li>
                                  <img src alt="" />
                                </li>
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
                    <div
                      role="tabpanel"
                      className="tab-pane fade"
                      id="Section2"
                    >
                      <div className="container">
                        <div className="row">
                          <div
                            style={{ fontSize: "34px" }}
                            className="title-part"
                          >
                            Part 2
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
                            <form className="qes-content">
                              <ol type={1}>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                              </ol>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      className="tab-pane fade"
                      id="Section3"
                    >
                      <div className="container">
                        <div className="row">
                          <div
                            style={{ fontSize: "34px" }}
                            className="title-part"
                          >
                            Part 3
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
                            <form className="qes-content">
                              <ol type={1}>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                              </ol>
                            </form>
                          </div>
                        </div>
                      </div>
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
                    <div
                      role="tabpanel"
                      className="tab-pane fade"
                      id="Section5"
                    >
                      <div className="container">
                        <div className="row">
                          <div
                            style={{ fontSize: "34px" }}
                            className="title-part"
                          >
                            Part 4
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
                            <form className="qes-content">
                              <ol type={1}>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                              </ol>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      className="tab-pane fade"
                      id="Section6"
                    >
                      <div className="container">
                        <div className="row">
                          <div
                            style={{ fontSize: "34px" }}
                            className="title-part"
                          >
                            Part 5
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
                            <form className="qes-content">
                              <ol type={1}>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                                <li>
                                  <div>Content of question here</div>
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> A: Shit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> B: Sit</label>
                                  <br />
                                  <input type="checkbox" id name defaultValue />
                                  <label htmlFor> C: Seat</label>
                                  <br />
                                </li>
                              </ol>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      className="tab-pane fade in active"
                      id="Section7"
                    >
                      <div className="container">
                        <div className="row">
                          <div
                            style={{ fontSize: "34px" }}
                            className="title-part"
                          >
                            Part 6
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
                          <div className="test">
                            <div className="title-if-need">
                              If need, add title here
                            </div>
                            <div className="qes-content">
                              <ol type={1}>
                                <li>
                                  You need this to travel to some foreign
                                  countries. (p _ _ _ _ _ _ _ )
                                </li>
                                <li>
                                  You need to buy this before you get on a
                                  plane. (t _ _ _ _ _ )
                                </li>
                                <li>
                                  This is whre you go to get a plane. (a _ _ _ _
                                  _ _ )
                                </li>
                                <li>
                                  You put your clothes in this when you travel.
                                  (s _ _ _ _ _ _ _ )
                                </li>
                                <li>
                                  This person likes visiting different palces.
                                  (t _ _ _ _ _ _ )
                                </li>
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
                    <div
                      role="tabpanel"
                      className="tab-pane fade in active"
                      id="Section8"
                    >
                      <div className="container">
                        <div className="row">
                          <div
                            style={{ fontSize: "34px" }}
                            className="title-part"
                          >
                            Part 7
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
                    <div
                      role="tabpanel"
                      className="tab-pane fade in active"
                      id="Section9"
                    >
                      <div className="container">
                        <div className="row">
                          <div
                            style={{ fontSize: "34px" }}
                            className="title-part"
                          >
                            Part 8
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
                    <div
                      role="tabpanel"
                      className="tab-pane fade in active"
                      id="Section10"
                    >
                      <div className="container">
                        <div className="row">
                          <div
                            style={{ fontSize: "34px" }}
                            className="title-part"
                          >
                            Part 9
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
                  Dignissimos asperiores vitae velit veniam totam fuga molestias
                  accusamus alias autem provident. Odit ab aliquam dolor eius.
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
    </div>
  );
}
