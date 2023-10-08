import { Stack, Typography, Box } from "@mui/material";
import { CardMedia, CardContent, Card, Container } from "@mui/material";

export function OurLeadership() {
  return (
    <Box padding={"24px 0"}>
      <Typography variant="h2" mb={4} fontWeight={600} textAlign={"center"}>
        Our Leadership
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
              sm: "row",
            },
          }}
        >
          <Card>
            <CardMedia
              component="img"
              height="194"
              image="user3.jpg"
              alt="Paella dish"
            />
            <CardContent
              sx={{
                textAlign: "center",
                backgroundColor: "purple",
                color: "#f7f7f7",
              }}
            >
              <Typography variant="h6" mb={0.7}>
                Harrison Wairegi
              </Typography>
              <Typography variant="p">Chairperson</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardMedia
              component="img"
              height="194"
              image="user2.jpg"
              alt="Paella dish"
            />
            <CardContent
              sx={{
                textAlign: "center",
                backgroundColor: "purple",
                color: "#f7f7f7",
              }}
            >
              <Typography variant="h6" mb={0.7}>
                Harrison Wairegi
              </Typography>
              <Typography variant="p">Chairperson</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardMedia
              component="img"
              height="194"
              image="user-1.jpg"
              alt="Paella dish"
            />
            <CardContent
              sx={{
                textAlign: "center",
                backgroundColor: "purple",
                color: "#f7f7f7",
              }}
            >
              <Typography variant="h6" mb={0.7}>
                Harrison Wairegi
              </Typography>
              <Typography variant="p">Chairperson</Typography>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
