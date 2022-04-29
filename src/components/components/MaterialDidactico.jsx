import React from "react";
import { Typography } from "@mui/material";

function MaterialDidactico() {
  return (
    <div>
      <Typography className="titles" variant="h4">
        El material
      </Typography>
      <div className="video-container">
        <iframe
          title="Video"
          src="https://www.youtube.com/embed/dhsWNHkJi2w"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div className="video-container">
        <iframe
          title="Video"
          src="https://www.youtube.com/embed/Z7mscV0Q_Qs"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  );
}

export default MaterialDidactico;
