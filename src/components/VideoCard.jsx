import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";
import "./css/VideoCard.css";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "250px" },
        boxShadow: "none",
        borderRadius: "10px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/K6vUpvZXV8Y&t`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            height: 139,
            objectFit: "cover",
            display: "block",
            borderRadius: "10px",
          }}
        />
      </Link>
      <CardContent
        sx={{
          height: "90px",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <div className="video-car-title">
            {" "}
            {snippet?.title || demoVideoTitle}
          </div>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <div className="video-card-channel-name">
            {" "}
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: "10px", color: "green", ml: "5px" }} />
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
