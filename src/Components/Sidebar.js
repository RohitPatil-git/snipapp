import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar d-flex flex-column ">
        <div className="logodiv">
          <img className="logo" src="images/logo.svg" alt="" />
        </div>
        <div className="pr-links">
          <div className="flinks">
            <i className="icon far fa-address-card"></i>
            <p className="pstyle">My Page</p>
          </div>
          <div className="flinks">
            <i className="icon fas fa-crown"></i>
            <p className="pstyle">Monitize</p>
          </div>
          <div className="flinks">
            <i className="icon fas fa-chart-bar"></i>
            <p className="pstyle">Analytics</p>
          </div>
          <div className="flinks">
            <i className="icon fas fa-dollar-sign"></i>
            <p className="pstyle">Earnings</p>
          </div>
          <div className="flinks">
            <i className="icon fas fa-cog"></i>
            <p className="pstyle">Settings</p>
          </div>
        </div>
        <div className="lowerdiv">
        <div className="flinks">
        <i className="icon fas fa-moon"></i>           
          </div>
        </div>
        <div className="flinks">
        <i class="icon fas fa-sign-out-alt"></i>
        <p className="pstyle">Log Out</p>
         
          </div>
      </div>
    </>
  );
};

export default Sidebar;
