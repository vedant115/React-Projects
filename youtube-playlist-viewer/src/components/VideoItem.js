import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ no, video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{
          alignItems: "center",
          cursor: "pointer",
          textAlign: "center",
          backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
        }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ marginRight: "20px", width: "100%" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />

        <Typography
          style={{
            display: "inline-flex",
            borderRadius: "50%",
            padding: "10px",
            margin: 0,
            backgroundColor: "#764ba2",
            color: "#fff",
            width: "30px",
            height: "30px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <b>{no}</b>
        </Typography>
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
