import { Stack, Typography, Box } from "@mui/material";
import { Button, CardContent, Card, Container } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";

export function OurMinistries() {
  return (
    <Box>
      <Typography variant="h2" mb={4} fontWeight={600} textAlign={"center"}>
        Our Ministries
      </Typography>
      <Container maxWidth={"md"}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={2}
          sx={{
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
          }}
        >
          <Card
            sx={{
              padding: "1px",
              borderRadius: 2,
              width: { sm: "90%", xs: "75%" },
            }}
          >
            <CardContent>
              <Typography fontWeight={500} variant="h4">
                ICT Ministry
              </Typography>
              <Typography my={2.2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                repellat eaque nostrum eum alias!
              </Typography>
              <Button
                variant="contained"
                endIcon={<ArrowRightAlt />}
                sx={{ backgroundColor: "purple", textTransform: "uppercase" }}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
          <Card
            sx={{
              padding: "1px",
              borderRadius: 2,
              width: { sm: "90%", xs: "75%" },
            }}
          >
            <CardContent>
              <Typography fontWeight={500} variant="h4">
                ICT Ministry
              </Typography>
              <Typography my={2.2}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
                optio sunt? Quas, aliquid ad!
              </Typography>
              <Button
                variant="contained"
                endIcon={<ArrowRightAlt />}
                sx={{ backgroundColor: "purple", textTransform: "uppercase" }}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
          <Card
            sx={{
              padding: "1px",
              borderRadius: 2,
              width: { sm: "90%", xs: "75%" },
            }}
          >
            <CardContent>
              <Typography fontWeight={500} variant="h4">
                ICT Ministry
              </Typography>
              <Typography my={2.2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                officia asperiores cumque voluptates dicta?
              </Typography>
              <Button
                variant="contained"
                endIcon={<ArrowRightAlt />}
                sx={{ backgroundColor: "purple", textTransform: "uppercase" }}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
