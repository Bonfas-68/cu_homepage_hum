import { Typography, Box } from "@mui/material";

export function Showcase() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "url(sliderSEction.jpg)",
        height: "70vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: {
            xs: "32px",
          },
          textAlign: "center",
        }}
        component="h1"
        mb={4}
        fontWeight={500}
      >
        Welcome To Kirinyaga University Christian Union
      </Typography>
      <Typography fontSize={16}>Serving God with fervent Worship</Typography>
    </Box>
  );
}
