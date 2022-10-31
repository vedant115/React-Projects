import React from "react";

import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, index) => (
    <VideoItem
      key={index}
      no={index + 1}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));

  return (
    <Grid container spacing={1}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
