import React from "react";
import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`;

  console.log(videoSrc);

  const event = new Date(video.snippet.publishedAt);
  const date = event.toLocaleDateString();
  const time = event.toLocaleTimeString();

  return (
    <React.Fragment>
      <Paper
        elevation={6}
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          paddingTop: "30px",
          height: "0",
          overflow: "hidden"
        }}
      >
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%"
          }}
        />
      </Paper>
      <Paper
        elevation={6}
        style={{
          padding: "15px",
          backgroundImage: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)"
        }}
      >
        <Typography variant="h4">
          <b>
            {video.snippet.title} - {video.snippet.channelTitle}
          </b>
        </Typography>
        <Typography variant="subtitle1">
          <b>Channel - {video.snippet.channelTitle}</b>
        </Typography>
        <Typography variant="subtitle2">
          <b>Published At - </b>
          {date} {time}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;
