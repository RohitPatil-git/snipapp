import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#ffffff"}}>
        <div className="container-fluid">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <a className="nav-link" aria-current="page" href="#2">
                <i className="fas fa-link"></i>
                  Links
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#2">
                <i className="fas fa-pencil-ruler"></i>
                 Design
                </a>
              </li>

              
            </ul>
            <form className="d-flex">
              <input
                className="inputstyle form-control me-2"
                type="search"
                placeholder=""
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Copy
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
