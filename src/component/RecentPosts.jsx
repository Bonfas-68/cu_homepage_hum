import { Stack, Typography, Box } from "@mui/material";
import { Button, CardMedia, CardContent, Card, Container } from "@mui/material";
import { Comment, MonitorHeartRounded } from "@mui/icons-material";
import { StyledButton } from "./App";

export function RecentPosts() {
  return (
    <Box padding={"24px 20px"}>
      <Typography variant="h2" mb={4} fontWeight={600} textAlign={"center"}>
        Recent Posts
      </Typography>
      <Container maxWidth={"md"}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={4}
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Card>
            <CardMedia
              component="img"
              height="194"
              image="post_image.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography
                fullWidth
                variant="h2"
                fontWeight={600}
                fontSize={24}
                color="purple"
              >
                Lorem, ipsum dolor.
              </Typography>
              <Box
                fullWidth
                width={"100%"}
                height={2}
                mt={2}
                mb={1}
                sx={{ backgroundColor: "purple" }}
              ></Box>
              <Typography variant="p" fontWeight={300} color="#999" my={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                rerum hic maiores deserunt laboriosam doloribus porro odit velit
                animi recusandae? Molestiae velit ipsum incidunt dolores id,
                laudantium, sunt ipsa omnis doloribus soluta quo sapiente
                laborum voluptatem aliquid saepe quis eius!
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                mt={3}
                alignItems={"center"}
              >
                <Typography fontWeight={600}>01/06/2021</Typography>

                <Box display={"flex"} gap={2} alignItems={"center"}>
                  <Button sx={{ color: "purple" }} startIcon={<Comment />}>
                    23
                  </Button>
                  <Button
                    sx={{ color: "purple" }}
                    startIcon={<MonitorHeartRounded />}
                  >
                    22
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Card>
            <CardMedia
              component="img"
              height="194"
              image="post_image.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography
                fullWidth
                variant="h2"
                fontWeight={600}
                fontSize={24}
                color="purple"
              >
                Lorem, ipsum dolor.
              </Typography>
              <Box
                fullWidth
                width={"100%"}
                height={2}
                mt={2}
                mb={1}
                sx={{ backgroundColor: "purple" }}
              ></Box>
              <Typography variant="p" fontWeight={300} color="#999" my={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                rerum hic maiores deserunt laboriosam doloribus porro odit velit
                animi recusandae? Molestiae velit ipsum incidunt dolores id,
                laudantium, sunt ipsa omnis doloribus soluta quo sapiente
                laborum voluptatem aliquid saepe quis eius!
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                mt={3}
                alignItems={"center"}
              >
                <Typography fontWeight={600}>01/06/2021</Typography>

                <Box display={"flex"} gap={2} alignItems={"center"}>
                  <Button sx={{ color: "purple" }} startIcon={<Comment />}>
                    23
                  </Button>
                  <Button
                    sx={{ color: "purple" }}
                    startIcon={<MonitorHeartRounded />}
                  >
                    22
                  </Button>
                </Box>
              </Box>
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
