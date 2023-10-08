import { Stack, Typography, Box } from "@mui/material";
import { CardMedia, CardContent, Card, Container } from "@mui/material";
import { StyledButton } from "./App";

export function Events() {
  return (
    <Box padding={"24px 20px"}>
      <Typography variant="h2" mb={4} fontWeight={600} textAlign={"center"}>
        Upcoming Events
      </Typography>
      <Container maxWidth="md">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={3}
          sx={{
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
          }}
        >
          <Card sx={{ width: { sm: "90%", xs: "80%" } }}>
            <CardMedia
              component="img"
              height="194"
              image="post_image.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography
                variant="h6"
                fontWeight={600}
                fontSize={13}
                color="text.secondary"
              >
                Evangelism Weekend.
              </Typography>
              <Typography
                variant="p"
                component={"h5"}
                fontWeight={600}
                color="#8009af"
                textTransform={"uppercase"}
                my={1}
              >
                Thu, Nov, 10:30 AM.
              </Typography>
              <Typography variant="span" fontWeight={300} color="#999" mb={1}>
                LH9, Main Campus
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: { sm: "90%", xs: "80%" } }}>
            <CardMedia
              component="img"
              height="194"
              image="post_image.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography
                variant="h6"
                fontWeight={600}
                fontSize={13}
                color="text.secondary"
              >
                Evangelism Weekend.
              </Typography>
              <Typography
                variant="p"
                component={"h5"}
                fontWeight={600}
                color="#8009af"
                textTransform={"uppercase"}
                my={1}
              >
                Thu, Nov, 10:30 AM.
              </Typography>
              <Typography variant="span" fontWeight={300} color="#999" mb={1}>
                LH9, Main Campus
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: { sm: "90%", xs: "80%" } }}>
            <CardMedia
              component="img"
              height="194"
              image="post_image.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography
                variant="h6"
                fontWeight={600}
                fontSize={13}
                color="text.secondary"
              >
                Evangelism Weekend.
              </Typography>
              <Typography
                variant="p"
                component={"h5"}
                fontWeight={600}
                color="#8009af"
                textTransform={"uppercase"}
                my={1}
              >
                Thu, Nov, 10:30 AM.
              </Typography>
              <Typography variant="span" fontWeight={300} color="#999" mb={1}>
                LH9, Main Campus
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: { sm: "90%", xs: "80%" } }}>
            <CardMedia
              component="img"
              height="194"
              image="post_image.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography
                variant="h6"
                fontWeight={600}
                fontSize={13}
                color="text.secondary"
              >
                Evangelism Weekend.
              </Typography>
              <Typography
                variant="p"
                component={"h5"}
                fontWeight={600}
                color="#8009af"
                textTransform={"uppercase"}
                my={1}
              >
                Thu, Nov, 10:30 AM.
              </Typography>
              <Typography variant="span" fontWeight={300} color="#999" mb={1}>
                LH9, Main Campus
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Container>
      <Box fullWidth textAlign={"center"} marginTop={4}>
        <StyledButton>View More</StyledButton>
      </Box>
    </Box>
  );
}
