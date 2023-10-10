import { Button, Link } from "@mui/material";
import React from "react";
import Logotanya from "../images/Logo-Tanya.png";
import Navbarcss from "../style/Navbar.css";
import Search from '../images/search.svg'
// import Navbarcss from "../style/Navbar.css";
// import Homecss from "../style/Home.css";
// import Contact from '../images/Frame 21.png'
// import Vector9 from '../images/Vector 9.png'
// import Mobile from '../images/Frame.png'
// import Mobilecss from "../style/Mobile.css"

const Navbar = () => {
  return (
    <>

    {/* <div className="container">

      <nav className="navbar navbar-expand-lg navbar-light bg-light container">
        <a href="index.html">
          <img
            className="logo-tanya"
            src={Logotanya}
            alt="fireSpot"
            style={{ display: "flex" }}
          />
        </a>
        <div
          className="collapse navbar-collapse"
          id="navbar
    supportedContent"
        >
          <ul 
            className="navbar-nav ml-auto"
            style={{
              gap: "40px",
              // height:'24px',
              // width :'392px',
              display: "flex",
              listStyle: "none",
              textDecoration: "none",
              marginTop: "-55px",
              marginLeft: "270px",
            }}
          >
            <li className="nav-item active">
              <Link className="nav-link" to="/" style={{fontWeight:'700' , color:'#',cursor:"pointer"}}>
                Home<span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about"  style={{cursor:'pointer'}}>
                About us              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="/beouraffiliate"
                style={{cursor:'pointer'}}
               
              >
                Be Our Affiliate<span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="/FAQ"
                style={{cursor:'pointer'}}
              >
                FAQ
              </Link>
            </li>
            <div style={{ marginLeft: "100px" , marginTop:"-1px" }}>
            <img style={{marginBottom:'-9px', marginRight:'30px'}} src={Search} alt="React Logo" />
              <Button
                className="bttg"
                size="small"
                sx={{
                  bgcolor: "orange",
                  borderRadius: "10px",
                  color: "white",
                  textTransform: "none",
                  marginRight: "17px",
                }}
              >
                Book Now
              </Button>
              <Button
                className="bttg"
                size="small"
                sx={{
                  bgcolor: "blue",
                  borderRadius: "10px",
                  color: "white",
                  textTransform: "none",
                  marginRight: "10px",
                }}
              >
                Contact US
              </Button>
            </div>
          </ul>
        </div>
      </nav>
    </div> */}
      {/* <Box>
      <div className="home" style={{backgroundImage:`url(${Vector9})`}}>

      </div>
      </Box>
      <img
          className="Mobilecss "
          src={Mobile}
          alt="fireSpot"
          style={{ display: "flex" }}
          /> */}
    </>
  );
};

export default Navbar;
