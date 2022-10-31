import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";

import { SearchBar, VideoDetail, VideoList, Modal } from "./components";
import youtube from "./api/youtube";
require('dotenv').config();

import "./styles.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modal, setModal] = useState(false);

  const onVideoSelect = (video) => setSelectedVideo(video);

  const handleModal = (val) => setModal(val);

  useEffect(() => {
    handleSubmit("PLzMcBGfZo4-kCLWnGmK0jUBmGLaJxvi4j");
  }, []);

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get("playlistItems", {
      params: {
        part: "snippet, contentDetails",
        maxResults: 25,
        playlistId: searchTerm,
        key: "AIzaSyDfl1hM1K5vunTE8clcNKEokMjlhQy3aB8"
      }
    });

    // console.log(response.data.items);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  // const { selectedVideo, videos } = this.state;

  return (
    <Grid container>
      {modal && <Modal setModal={setModal} />}
      <Grid item xs={12} style={{ height: "100vh", width: "100vw" }}>
        <Grid
          container
          direction="row"
          spacing={5}
          style={{ margin: "0", width: "100%" }}
        >
          <Grid
            item
            xs={3}
            style={{
              alignItems: "center",
              textAlign: "center",
              padding: "10px"
            }}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              // spacing={1}
            >
              <Grid item xs={4}>
                <YouTubeIcon
                  style={{
                    fontSize: "60px",
                    color: "red"
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <p style={{ fontSize: "1.5rem" }}>
                  <b>devLearnTube</b>
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={9}
            style={{
              padding: "10px"
            }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              style={{ height: "100%" }}
            >
              <Grid item xs={12}>
                <SearchBar
                  onFormSubmit={handleSubmit}
                  onModalSelect={handleModal}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
