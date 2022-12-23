import React, { FC, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import Resume from "./Jason Zeng_Resume.pdf";
import styles from "./styles";
import DownloadIcon from "@mui/icons-material/Download";
import { BallTriangle } from "react-loader-spinner";
import { usePdf } from "@mikecousins/react-pdf";

const ResumeScreen: FC = () => {
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
      sx={{
        backgroundColor: "lightgray",
        height: "100%",
      }}
    >
      {!pdfDocument ? (
        <Box
          height={"90vh"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <BallTriangle
            height={50}
            width={50}
            radius={5}
            color="gray"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
          <Typography marginTop={2} fontSize={".9rem"}>
            Loading...
          </Typography>
        </Box>
      ) : (
        <Box sx={styles.container}>
          <Box sx={styles.downloadContainer}>
            <Typography sx={styles.downloadTitle}>Download Resume</Typography>
            <Button sx={styles.downloadButton}>
              <a href={Resume} download style={styles.downloadButtonText}>
                <DownloadIcon />
              </a>
            </Button>
          </Box>

          <canvas ref={canvasRef} />
        </Box>
      )}
    </Box>
  );
};

export default ResumeScreen;
