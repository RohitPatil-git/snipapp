import React from "react";

const Content = () => {
  return (
    <div className="content-div container">
      <div className="row">
        <div className="left-div col">
          <div className="addblock">
            <p className="add-header">Add Block</p>
            <div className="addstuff d-flex">
              <div className="links2">
                <i className="icon2 fas fa-paperclip"></i>
                <p className="pstyle2">Custom Link</p>
              </div>
              <div className="links2">
                <i className="icon2 fas fa-envelope-open"></i>
                <p className="pstyle2">Mailing List</p>
              </div>
              <div className="links2">
                <i className="icon2 fas fa-share-alt"></i>
                <p className="pstyle2">Link Socials</p>
              </div>
              <div className="links2">
                <i className="icon2 fas fa-heading"></i>
                <p className="pstyle2">Text</p>
              </div>
              <div className="links2">
                <i className="icon2 fas fa-music"></i>
                <p className="pstyle2">Music Preview</p>
              </div>
              <div className="links2">
                <i className="icon2 fab fa-youtube"></i>
                <p className="pstyle2">Video Preview</p>
              </div>
            </div>
            <p className="add-header">Monitizable Blocks</p>
            <div className="blockstuff d-flex justify-content-between">
              <div className="links2">
                <i className="icon2 fab fa-youtube"></i>
                <p className="pstyle2">Live Streams</p>
              </div>
              <div className="links2">
                <i className="icon2 fab fa-youtube"></i>
                <p className="pstyle2">Shoutouts</p>
              </div>
              <div className="links2">
                <i className="icon2 fas fa-stream"></i>
                <p className="pstyle2">Best Content</p>
              </div>
              <div className="links2">
                <i className="icon2 fas fa-bullhorn"></i>
                <p className="pstyle2">Tipping</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <p>Page Header</p>
              <div className="bio d-flex">
                <i className="fas fa-user"></i>
                <div className="bio-desc d-flex flex-column">
                  <p>Add Your Bio</p>
                  <span>Profile Pic, Name and bio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-div col d-flex justify-content-center">
          <div className="mobile d-flex flex-column">
          <div className="mobdiv">
          <i className="fas fa-user"></i>
          <h4>@Rohit</h4>
          <p>Powered by <b> snipfeed </b></p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
