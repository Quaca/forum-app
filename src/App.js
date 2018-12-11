import React, { Component } from "react";

import avt1 from "./images/avt1.jpg";
import logo from "./images/logo.jpg";
import slider1 from "./images/slide.jpg";
import icon1 from "./images/icon1.jpg";
import icon2 from "./images/icon2.jpg";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="tp-banner-container">
          <div className="tp-banner">
            <img src={slider1} alt="slidebg1" />
          </div>
        </div>

        <div className="headernav">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-md-2 col-2 logo">
                <a href="index.html">
                  <img src={logo} alt="" />
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-4 selecttopic">
                <div className="dropdown">
                  <div
                    className="dropdown-toggle"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                  >
                    Borderlands
                  </div>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="/">
                      Borderlands 1
                    </a>
                    <a className="dropdown-item" href="/">
                      Borderlands 2
                    </a>
                    <a className="dropdown-item" href="/">
                      Borderlands 3
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 search d-none d-lg-block">
                <div className="wrap">
                  <form action="/" method="post" className="form">
                    <div className="pull-left txt">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search topics"
                      />
                    </div>
                    <div className="pull-right">
                      <button className="btn btn-default" type="button">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                    <div className="clearfix" />
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6 avt">
                <div className="pull-right">
                  <div className="pull-left">
                    <form action="" method="post" className="form">
                      <button className="btn btn-primary">
                        Start new topic
                      </button>
                    </form>
                  </div>
                  <div className="env pull-left">
                    <i className="fa fa-envelope" />
                  </div>

                  <div className="avatar pull-left dropdown">
                    <a href="/" id="dropdownMenuLink" data-toggle="dropdown">
                      <img
                        height="36px"
                        width="36px"
                        className="fit-image"
                        src={avt1}
                        alt=""
                      />
                    </a>
                    <div className="status green">&nbsp;</div>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <a className="dropdown-item" href="/">
                        My profile
                      </a>
                      <a className="dropdown-item" href="/">
                        Inbox
                      </a>
                      <a className="dropdown-item" href="/">
                        Log out
                      </a>
                      <a className="dropdown-item" href="/">
                        Create account
                      </a>
                    </div>
                    <b className="dropdown-toggle caret" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-sm-12 col=md-8">
                <div className="pull-left">
                  <a href="/" className="prevnext">
                    <i className="fa fa-angle-left" />
                  </a>
                </div>
                <div className="pull-left">
                  <ul className="pagination-forum">
                    <li className="d-none d-md-inline-block">
                      <a href="/">1</a>
                    </li>
                    <li className="d-none d-md-inline-block">
                      <a href="/">2</a>
                    </li>
                    <li className="d-none d-md-inline-block">
                      <a href="/">3</a>
                    </li>
                    <li className="d-none d-md-inline-block">
                      <a href="/">4</a>
                    </li>
                    <li className="">
                      <a href="/">5</a>
                    </li>
                    <li className="">
                      <a href="/">6</a>
                    </li>
                    <li className="">
                      <a href="/">7</a>
                    </li>
                    <li className="">
                      <a href="/">8</a>
                    </li>
                    <li className="d-none d-md-inline-block">
                      <a href="/">9</a>
                    </li>
                    <li className="d-none d-md-inline-block">
                      <a href="/">10</a>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <a href="/">11</a>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <a href="/">12</a>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <a href="/">13</a>
                    </li>
                    <li className="">
                      <a href="/">546</a>
                    </li>
                  </ul>
                </div>
                <div className="pull-left">
                  <a href="/" className="prevnext last">
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                {/*-- Post --*/}
                <div className="post">
                  <div className="row">
                    <div className="col-10">
                      <div className="row">
                        <div className="col-2 user-info pull-left">
                          <div className="avatar">
                            <img
                              src={avt1}
                              alt=""
                              height="36px"
                              width="36px"
                              className="fit-image"
                            />
                            <div className="status green">&nbsp;</div>
                          </div>
                          <div className="icons">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                          </div>
                        </div>
                        <div className="col-10 post-text pull-left">
                          <h2>10 Kids Unaware of Their Halloween Costume</h2>
                          <p>
                            It's one thing to subject yourself to a Halloween
                            costume mishap because, hey, that's your
                            prerogative.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 post-info pull-left">
                      <div className="comments">
                        <div className="comment-bg">
                          560
                          <div className="mark" />
                        </div>
                      </div>
                      <div className="views">
                        <i className="fa fa-eye" />
                        &nbsp;1568
                      </div>
                      <div className="time">
                        <i className="fa fa-clock-o" />
                        &nbsp;24min
                      </div>
                    </div>
                  </div>
                </div>
                {/*-- Post --*/}
                {/*-- Post --*/}
                <div className="post">
                  <div className="row">
                    <div className="col-10">
                      <div className="row">
                        <div className="col-2 user-info pull-left">
                          <div className="avatar">
                            <img
                              src={avt1}
                              alt=""
                              height="36px"
                              width="36px"
                              className="fit-image"
                            />
                            <div className="status green">&nbsp;</div>
                          </div>
                          <div className="icons">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                          </div>
                        </div>
                        <div className="col-10 post-text pull-left">
                          <h2>10 Kids Unaware of Their Halloween Costume</h2>
                          <p>
                            It's one thing to subject yourself to a Halloween
                            costume mishap because, hey, that's your
                            prerogative.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 post-info pull-left">
                      <div className="comments">
                        <div className="comment-bg">
                          560
                          <div className="mark" />
                        </div>
                      </div>
                      <div className="views">
                        <i className="fa fa-eye" />
                        &nbsp;1568
                      </div>
                      <div className="time">
                        <i className="fa fa-clock-o" />
                        &nbsp;24min
                      </div>
                    </div>
                  </div>
                </div>
                {/*-- Post --*/}
                {/*-- Post --*/}
                <div className="post">
                  <div className="row">
                    <div className="col-10">
                      <div className="row">
                        <div className="col-2 user-info pull-left">
                          <div className="avatar">
                            <img
                              src={avt1}
                              alt=""
                              height="36px"
                              width="36px"
                              className="fit-image"
                            />
                            <div className="status green">&nbsp;</div>
                          </div>
                          <div className="icons">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                          </div>
                        </div>
                        <div className="col-10 post-text pull-left">
                          <h2>10 Kids Unaware of Their Halloween Costume</h2>
                          <p>
                            It's one thing to subject yourself to a Halloween
                            costume mishap because, hey, that's your
                            prerogative.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 post-info pull-left">
                      <div className="comments">
                        <div className="comment-bg">
                          560
                          <div className="mark" />
                        </div>
                      </div>
                      <div className="views">
                        <i className="fa fa-eye" />
                        &nbsp;1568
                      </div>
                      <div className="time">
                        <i className="fa fa-clock-o" />
                        &nbsp;24min
                      </div>
                    </div>
                  </div>
                </div>
                {/*-- Post --*/}
                {/*-- Post --*/}
                <div className="post">
                  <div className="row">
                    <div className="col-10">
                      <div className="row">
                        <div className="col-2 user-info pull-left">
                          <div className="avatar">
                            <img
                              src={avt1}
                              alt=""
                              height="36px"
                              width="36px"
                              className="fit-image"
                            />
                            <div className="status green">&nbsp;</div>
                          </div>
                          <div className="icons">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                          </div>
                        </div>
                        <div className="col-10 post-text pull-left">
                          <h2>10 Kids Unaware of Their Halloween Costume</h2>
                          <p>
                            It's one thing to subject yourself to a Halloween
                            costume mishap because, hey, that's your
                            prerogative.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 post-info pull-left">
                      <div className="comments">
                        <div className="comment-bg">
                          560
                          <div className="mark" />
                        </div>
                      </div>
                      <div className="views">
                        <i className="fa fa-eye" />
                        &nbsp;1568
                      </div>
                      <div className="time">
                        <i className="fa fa-clock-o" />
                        &nbsp;24min
                      </div>
                    </div>
                  </div>
                </div>
                {/*-- Post --*/}
                {/*-- Post --*/}
                <div className="post">
                  <div className="row">
                    <div className="col-10">
                      <div className="row">
                        <div className="col-2 user-info pull-left">
                          <div className="avatar">
                            <img
                              src={avt1}
                              alt=""
                              height="36px"
                              width="36px"
                              className="fit-image"
                            />
                            <div className="status green">&nbsp;</div>
                          </div>
                          <div className="icons">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                          </div>
                        </div>
                        <div className="col-10 post-text pull-left">
                          <h2>10 Kids Unaware of Their Halloween Costume</h2>
                          <p>
                            It's one thing to subject yourself to a Halloween
                            costume mishap because, hey, that's your
                            prerogative.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 post-info pull-left">
                      <div className="comments">
                        <div className="comment-bg">
                          560
                          <div className="mark" />
                        </div>
                      </div>
                      <div className="views">
                        <i className="fa fa-eye" />
                        &nbsp;1568
                      </div>
                      <div className="time">
                        <i className="fa fa-clock-o" />
                        &nbsp;24min
                      </div>
                    </div>
                  </div>
                </div>
                {/*-- Post --*/}
                {/*-- Post --*/}
                <div className="post">
                  <div className="row">
                    <div className="col-10">
                      <div className="row">
                        <div className="col-2 user-info pull-left">
                          <div className="avatar">
                            <img
                              src={avt1}
                              alt=""
                              height="36px"
                              width="36px"
                              className="fit-image"
                            />
                            <div className="status green">&nbsp;</div>
                          </div>
                          <div className="icons">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                          </div>
                        </div>
                        <div className="col-10 post-text pull-left">
                          <h2>10 Kids Unaware of Their Halloween Costume</h2>
                          <p>
                            It's one thing to subject yourself to a Halloween
                            costume mishap because, hey, that's your
                            prerogative.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 post-info pull-left">
                      <div className="comments">
                        <div className="comment-bg">
                          560
                          <div className="mark" />
                        </div>
                      </div>
                      <div className="views">
                        <i className="fa fa-eye" />
                        &nbsp;1568
                      </div>
                      <div className="time">
                        <i className="fa fa-clock-o" />
                        &nbsp;24min
                      </div>
                    </div>
                  </div>
                </div>
                {/*-- Post --*/}
              </div>
              <div className="col-lg-4 col-12">
                {/*--Sidebarblock--*/}
                <div className="sidebar-block">
                  <h3>Categories</h3>
                  <div className="divline" />
                  <div className="block-text">
                    <ul className="categories">
                      <li>
                        <a href="/">
                          Trading for money{" "}
                          <span className="badge pull-right">20</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Vault keys giveaway{" "}
                          <span className="badge pull-right">10</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Misc guns location{" "}
                          <span className="badge pull-right">50</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Looking for players{" "}
                          <span className="badge pull-right">36</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Stupid bugs and solves{" "}
                          <span className="badge pull-right">41</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Video and audio drivers{" "}
                          <span className="badge pull-right">11</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          2K official forums{" "}
                          <span className="badge pull-right">5</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*--Sidebarblock--*/}
                {/*--Sidebarblock--*/}
                <div className="sidebar-block">
                  <h3>Poll of the week</h3>
                  <div className="divline" />
                  <div className="block-text">
                    <p>Which game you are playing this week?</p>
                    <form action="/" method="post" className="form">
                      <table className="poll">
                        <tbody>
                          <tr>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar color1"
                                  role="progressbar"
                                  aria-valuenow="40"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "90%" }}
                                >
                                  Call of Duty Ghost
                                </div>
                              </div>
                            </td>
                            <td className="chbox">
                              <input
                                id="opt1"
                                type="radio"
                                name="opt"
                                value="1"
                              />
                              <label htmlFor="opt1" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar color2"
                                  role="progressbar"
                                  aria-valuenow="40"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "70%" }}
                                >
                                  League of Legends
                                </div>
                              </div>
                            </td>
                            <td className="chbox">
                              <input
                                id="opt2"
                                type="radio"
                                name="opt"
                                value="2"
                              />
                              <label htmlFor="opt2" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar color3"
                                  role="progressbar"
                                  aria-valuenow="40"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "50%" }}
                                >
                                  Fifa
                                </div>
                              </div>
                            </td>
                            <td className="chbox">
                              <input
                                id="opt3"
                                type="radio"
                                name="opt"
                                value="3"
                              />
                              <label htmlFor="opt3" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                    <p className="small">Voting ends on 19th of October</p>
                  </div>
                </div>
                {/*--Sidebarblock--*/}
                {/*--Sidebarblock--*/}
                <div className="sidebar-block">
                  <h3>My active threads</h3>
                  <div className="divline" />
                  <div className="block-text">
                    <a href="/">
                      This Dock Turns Your iPhone Into a Bedside Lamp
                    </a>
                  </div>
                  <div className="divline" />
                  <div className="block-text">
                    <a href="/">
                      Who Wins in the Battle for Power on the Internet?
                    </a>
                  </div>
                  <div className="divline" />
                  <div className="block-text">
                    <a href="/">
                      Sony QX10: A Funky, Overpriced Lens Camera for Your
                      Smartphone
                    </a>
                  </div>
                  <div className="divline" />
                  <div className="block-text">
                    <a href="/">
                      FedEx Simplifies Shipping for Small Businesses
                    </a>
                  </div>
                  <div className="divline" />
                  <div className="block-text">
                    <a href="/">
                      Loud and Brave: Saudi Women Set to Protest Driving Ban
                    </a>
                  </div>
                  <div className="divline" />
                </div>
                {/*--Sidebarblock--*/}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-sm-12 col=md-8">
                <div className="pull-left">
                  <a href="/" className="prevnext">
                    <i className="fa fa-angle-left" />
                  </a>
                </div>
                <div className="pull-left">
                  <ul className="pagination-forum">
                    <li className="d-none d-md-inline-block">
                      <a href="/">1</a>
                    </li>
                    <li className="d-none d-md-inline-block">
                      <a href="/">2</a>
                    </li>
                    <li className="d-none d-md-inline-block">
                      <a href="/">3</a>
                    </li>
                    <li className="d-none d-md-inline-block">
                      <a href="/">4</a>
                    </li>
                    <li className="">
                      <a href="/">5</a>
                    </li>
                    <li className="">
                      <a href="/">6</a>
                    </li>
                    <li className="">
                      <a href="/">7</a>
                    </li>
                    <li className="">
                      <a href="/">8</a>
                    </li>
                    <li className="d-none d-md-inline-block">
                      <a href="/">9</a>
                    </li>
                    <li className="d-none d-md-inline-block">
                      <a href="/">10</a>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <a href="/">11</a>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <a href="/">12</a>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <a href="/">13</a>
                    </li>
                    <li className="">
                      <a href="/">546</a>
                    </li>
                  </ul>
                </div>
                <div className="pull-left">
                  <a href="/" className="prevnext last">
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-md-2 col-2 logo">
                <a href="/">
                  <img src={logo} alt="" />
                </a>
              </div>
              <div className="col-lg-8 col-md-5 col-10">
                Copyrights 2018, website.com
              </div>
              <div className="col-lg-3 col-md-5 col-sm-12 sociocontent">
                <ul className="socialicons">
                  <li>
                    <a href="/">
                      <i className="fa fa-facebook-square" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-cloud" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-rss" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
