import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-header">
      <div className="container-fluid">
        <div className="row navbar-head">
          <div className="col-md-11 mx-auto navcol">
            <div className="row homelogo pl-2 pr-2">
              <div className="col-md-4 col-xs-12 col-sm-2 pl-2 pt-1 pb-1 mx-auto logo">
                <div className="hjm-logo" />
              </div>
              <div className="col-md-8 col-xs-12 col-sm-10 pl-2 pt-1 pb-1 mx-auto otrbar">
                <div className="row diff-bar">
                  <div className="col-md-3 col-xs-0 col-sm-2 mx-auto empty-bar" />
                  <div className="col-md-9 col-xs-12 col-sm-10 mx-rt search-bar">
                    <div className="search-container">
                      <input
                        type="text"
                        placeholder="Search.."
                        name="search"
                        className="inputtxt"
                      />
                    </div>
                    <div className="help-cont">Help</div>
                    <div className="acc-cont">Account</div>
                    <div className="icon-br">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-briefcase icon-bar"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-1">
          <div className="col-11 pt-3 mt-5 order-2 order-lg-2 mx-auto">
            <h2 className="txt-1">Cari Cari</h2>
          </div>
        </div>
        <div className="row text-2">
          <div className="col-md-5 col-xs-12 col-sm-8 pt-3 order-2 order-lg-2">
            <div className="txt-2">
              Live from their sofas to yours. Get close to your favourite
              artists, and never miss out.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
