import React from "react";
import Group715 from "../images/Group 715.png";
import HomeCss from "../style/Home.css";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      
        <div className="row">
          <div style={{ marginTop: "150px" }}>
            <Typography
              style={{
                color: "#0063E7",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                textTransform: "uppercase",
                // padding: '115px 8px'
              }}
            >
              TANYA.CARE APP
            </Typography>
            
              <Typography
                style={{
                  color: "#0C2C5F",
                  fontFamily: "Poppins",
                  fontSize: "60px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "70px" /* 109.375% */,
                  letterSpacing: "-2.56px",
                  width: "600px",
                }}
              >
                Get Your Personalised Health Care With Tanya.Care
            <img
              className="group715 "
              src={Group715}
              alt="fireSpot"
              style={{ display: "flex" }}
            />
              </Typography>
            
          </div>
          <div className="col-9">
          </div>
        </div>
      
    </>
  );
};
export default Home;
