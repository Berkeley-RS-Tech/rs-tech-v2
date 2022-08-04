import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignUp from "./sign_up";
//import {Route,Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import OwlImage from "./reentry-owl.jpg";

function Copyright(props) {

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://reentry.berkeley.edu/">
        reentry.berkeley.edu
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}



const theme = createTheme();

export default function LinkTree() {
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  let history = createBrowserHistory();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
        <img src={OwlImage} alt="Berkeley Owl"></img>
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          </Avatar> */}
          <Typography component="h1" variant="h5">
          Welcome to the RSP App
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Button
              onClick={() => {
                history.push("/checked_in");
                window.location.reload();
              }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Check In
            </Button>
            <Button
              onClick={() => {
                history.push("https://reentry.berkeley.edu/our-team");
                window.location = "https://reentry.berkeley.edu/our-team";
              }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Book Appointment
            </Button>
            <Button
              onClick={() => {
                history.push("/social_network");
                window.location.reload();
              }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reentry Link
            </Button>
            <Button
              onClick={() => {
                history.push("https://www.berkeley.edu/map");
                window.location = "https://www.berkeley.edu/map";
              }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Campus Map
            </Button>
            <Button
              onClick={() => {
                history.push("https://calcentral.berkeley.edu/");
                window.location = "https://calcentral.berkeley.edu/";
              }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              CalCentral
            </Button>
            <Button
              onClick={() => {
                history.push("/");
                window.location.reload();
              }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log Out
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
