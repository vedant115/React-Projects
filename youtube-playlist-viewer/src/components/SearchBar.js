import React, { useState } from "react";
import { Grid, Paper, TextField } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

const SearchBar = ({ onFormSubmit, onModalSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  //   const [selected, setSelected] = useState(false);

  const handleChange = (event) => setSearchTerm(event.target.value);

  const handleSubmit = (event) => {
    onFormSubmit(searchTerm);
    setSearchTerm("");

    event.preventDefault();
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <Grid item xs={11}>
        <Paper elevation={6} style={{ padding: "10px" }}>
          <form onSubmit={handleSubmit} style={{ width: "90%" }}>
            <TextField
              fullWidth
              label="Enter Playlist ID..."
              value={searchTerm}
              onChange={handleChange}
            />
          </form>
        </Paper>
      </Grid>
      <Grid item xs={1} style={{ textAlign: "center" }}>
        <Grid
          container
          style={{ cursor: "pointer", justifyContent: "center" }}
          onClick={() => onModalSelect(true)}
        >
          <InfoIcon />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
