import React from "react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

const GumroadButton = ({ slug }) => {
  return (
    <Button
      variant="contained"
      startIcon={<DownloadIcon />}
      href={`https://shop.codecookbook.io/l/${slug}`}
      target="_blank"
    >
      Download Code
    </Button>
  );
};

export default GumroadButton;
