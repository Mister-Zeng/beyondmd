import React, { useRef } from "react";
import { usePdf } from "@mikecousins/react-pdf";
import Resume from "./Jason Zeng_Resume.pdf";
import { Box } from "@mui/material";

const PDFViewer = () => {
  const canvasRef: React.MutableRefObject<null> = useRef(null);

  const { pdfDocument } = usePdf({
    file: Resume,
    canvasRef,
  });

  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
      {!pdfDocument && <span>Loading...</span>}
      <canvas ref={canvasRef} />
    </Box>
  );
};

export default PDFViewer;
