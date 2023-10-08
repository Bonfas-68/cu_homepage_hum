import "./App.css";
import { styled } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "@mui/material";
import { Navbar } from "./component/Navbar";
import { Home } from "./pages/Home";
// import Footer from "./component/Footer";
export const StyledButton = styled(Button)({
  backgroundColor: "purple",
  color: "white",
  textTransform: "uppercase",

  mt: "40px",
  letterSpacing: "1px",
  fontWeight: 600,
  padding: "12px 24px",
  "&:hover": {
    backgroundColor: "#8009af",
    color: "white",
  },
});
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
