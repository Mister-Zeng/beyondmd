import React, { FC, useRef } from "react";
import { usePdf } from "@mikecousins/react-pdf";
import Resume from "./Jason Zeng_Resume.pdf";
import { Box, Typography } from "@mui/material";
import { BallTriangle } from "react-loader-spinner";

const PDFViewer: FC = () => {
  const canvasRef: React.MutableRefObject<null> = useRef(null);

  const { pdfDocument } = usePdf({
    file: Resume,
    canvasRef,
  });

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ backgroundColor: !pdfDocument ? "lightgray" : "white" }}
    >
      {!pdfDocument ? (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          height={"90vh"}
          justifyContent={"center"}
        >
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="gray"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
          <Typography marginTop={2}>Loading...</Typography>
        </Box>
      ) : (
        <canvas ref={canvasRef} />
      )}
    </Box>
  );
};

export default PDFViewer;
