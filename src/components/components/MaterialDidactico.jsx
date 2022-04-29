import React from "react";
import { Typography } from "@mui/material";

function MaterialDidactico() {
  return (
    <div>
      <Typography sx={{ textAlign: "center" }} variant="h5">
        El material
      </Typography>
      <div class="video-container">
        <iframe
          title="Video"
          src="https://www.youtube.com/embed/cjRkTM51eGg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  );
}

export default MaterialDidactico;
