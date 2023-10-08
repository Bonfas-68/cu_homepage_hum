import { Stack, Avatar, AppBar, Box, Modal } from "@mui/material";
import { Button, Link } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";

export function Navbar() {
  const [toggleModel, setToggleModel] = useState(false);
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "white", padding: "10px" }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Avatar src="culogo.png" />

        <Box
          ml={"auto"}
          display="flex"
          alignItems="center"
          gap={4}
          sx={{
            color: "black",
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
            },
          }}
          textTransform={"uppercase"}
        >
          <Link underline="none" color={"rgba(0,0,0,0.6)"} href="/">
            Home
          </Link>
          <Link underline="none" color={"rgba(0,0,0,0.6)"} href="/ministers">
            ministers
          </Link>
          <Link underline="none" color={"rgba(0,0,0,0.6)"} href="/resources">
            resources
          </Link>
          <Link underline="none" color={"rgba(0,0,0,0.6)"} href="/events">
            events
          </Link>
          <Link underline="none" color={"rgba(0,0,0,0.6)"} href="/about">
            about
          </Link>
          <Link underline="none" color={"rgba(0,0,0,0.6)"} href="/give">
            give
          </Link>
          <Link underline="none" color={"rgba(0,0,0,0.6)"} href="/contactus">
            contact us
          </Link>
        </Box>

        <Box
          variant="contained"
          display={"flex"}
          alignItems={"center"}
          gap={2}
          ml="40px"
          arial-label="outlined primary button"
        >
          <Button
            variant="outlined"
            sx={{ width: "100px", color: "green", border: "1px solid green" }}
          >
            Log In
          </Button>
          <Button
            sx={{
              border: "1px solid transparent",
              bgcolor: "green",
              "&:hover": {
                bgcolor: "whitesmoke",
                color: "green",
                border: "1px solid green",
              },
            }}
            variant="contained"
          >
            Register
          </Button>
        </Box>

        <Menu
          onClick={(e) => setToggleModel(true)}
          fontSize="24px"
          sx={{
            color: "#111",
            cursor: "pointer",
            display: {
              xs: "block",
              sm: "block",
              md: "none",
            },
            fontSize: 40,
          }}
        />
        <Modal
          open={toggleModel}
          onClose={(e) => setToggleModel(false)}
          arial-labelledby="modal-modal-title"
          arial-describedby="odalmodal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            width={"max-content"}
            height={"max-content"}
            bgcolor={"background.default"}
            // color={"text.primary"}
            p={3}
            borderRadius={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textTransform: "capitalize",
              gap: 2,
              color: "green",
              fontWeight: 400,
              textAlign: "left",
            }}
          >
            <Link underline="none" color={"rgba(0,0,0,0.6)"} href="/">
              Home
            </Link>
            <Link underline="none" color={"rgba(0,0,0,0.6)"} href="/ministers">
              ministers
            </Link>
            <Link underline="none" color={"rgba(0,0,0,0.6)"} href="/resources">
              resources
            </Link>
            <Link underline="none" color={"rgba(0,0,0,0.6)"} href="/events">
              events
            </Link>
            <Link underline="none" color={"rgba(0,0,0,0.6)"} href="/about">
              about
            </Link>
            <Link underline="none" color={"rgba(0,0,0,0.6)"} href="/give">
              give
            </Link>
            <Link underline="none" color={"rgba(0,0,0,0.6)"} href="/contactus">
              contact us
            </Link>
          </Box>
        </Modal>
      </Stack>
    </AppBar>
  );
}
