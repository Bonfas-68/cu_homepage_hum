import { Typography, Box } from "@mui/material";
import { Card, Container } from "@mui/material";
import { StyledButton } from "./App";

export function Description() {
  return (
    <Box fullWidth sx={{ padding: "24px", textAlign: "center" }}>
      <Typography mb={4} variant="h3" fontWeight={600}>
        Everyday Church
      </Typography>
      <Container maxWidth="md">
        <Card
          variant="div"
          mb={2}
          sx={{
            margin: "21px auto",
            fontSize: "21px",
            padding: "12px 24px",
            boxShadow: "0 1px 2px 0px rgba(0,0,0,0.2)",
            borderRadius: "4px",
          }}
        >
          <Typography variant="p" component={"h3"}></Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          provident tempora, similique optio voluptatum consectetur recusandae
          voluptatibus aperiam modi maiores.
        </Card>
        <Card
          variant="div"
          mb={2}
          sx={{
            margin: "21px auto",
            fontSize: "21px",
            padding: "12px 24px",
            boxShadow: "0 1px 2px 0px rgba(0,0,0,0.2)",
            borderRadius: "4px",
          }}
        >
          <Typography variant="p" component={"h3"}></Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          provident tempora, similique optio voluptatum consectetur recusandae
          voluptatibus aperiam modi maiores.
        </Card>
        <Card
          variant="div"
          mb={4}
          sx={{
            margin: "21px auto",
            fontSize: "21px",
            padding: "12px 24px",
            boxShadow: "0 1px 2px 0px rgba(0,0,0,0.2)",
            borderRadius: "4px",
          }}
        >
          <Typography variant="p" component={"h3"}></Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          provident tempora, similique optio voluptatum consectetur recusandae
          voluptatibus aperiam modi maiores.
        </Card>
      </Container>
      <StyledButton size="small" variant="contained">
        Join us for a service
      </StyledButton>
    </Box>
  );
}
