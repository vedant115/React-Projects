import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import modal1 from "../assets/modal1.png";
import modal2 from "../assets/modal2.png";

const Modal = ({ setModal }) => {
  console.log("modal clicked!!!");
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setModal(false);
    }
  };

  return (
    <Grid
      container
      className="backdrop"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "2000",
        background: "rgba(0,0,0,0.5)"
      }}
      onClick={handleClick}
    >
      <Grid
        item
        style={{
          display: "block",
          maxWidth: "60%",
          maxHeight: "80%",
          margin: "60px auto",
          boxShadow: "3px 5px 7px rgba(0,0,0,0.5)",
          border: "3px solid white",
          backgroundColor: "#f6f3ff",
          overflow: "auto"
        }}
      >
        <Paper elevation={6} style={{ padding: "10px" }}>
          <h3>How to get playlist ID ?</h3>
          <ol>
            <li>
              <Typography>Click on share icon.</Typography>
              <img
                src={modal1}
                alt="reference1"
                style={{
                  width: "80%",
                  height: "30%",
                  border: "2px solid red",
                  margin: "10px"
                }}
              />
            </li>
            <li>
              <Typography>
                Click on Embed and copy playlist ID as shown in image.
              </Typography>
              <img
                src={modal2}
                alt="reference2"
                style={{
                  width: "80%",
                  height: "30%",
                  border: "2px solid red",
                  margin: "10px"
                }}
              />
            </li>
          </ol>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Modal;
