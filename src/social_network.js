// import './App.css';
// //import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React from 'react';
// import owl from './reentry-owl.jpg';

// class SNetwork extends React.Component {
//    render() {
//     return (
//       <div>
//         <Header></Header>
//         <div className="rowC">
//           <Sidebar></Sidebar>
//           <div className="middleBlock">

//           </div>
//           <Connections></Connections>
//         </div>
//         <Hello></Hello>
//       </div>

//     );
//   }
// }

// function Hello () {
//     const sayHello = () => {
//       console.log("hello");
//     };

//   return (
//       <div>
//           <ul>
//               <li>
//               check in
//               </li>
//           </ul>
//       </div>
//   );
// }

//  function Connections() {
//       return (
//       <div className="right-box">
//           <div> Connections </div>
//           {[...Array(8)].map(((n) => <Block></Block>))}
//       </div>
//       );
//   }

// function Block() {
//   return (
//       <div className="rowC">
//          <img src= "public/logo192.png"></img>
//               <div className="colC">
//                   <div> First Name & Last Name </div>
//                   <div> Expected May 2023 </div>
//                   <div> Major: </div>
//               </div>
//       </div>
//   )
// }

// function Header() {
//   return (<div>
//     <img src="https://berkeley-reentry.herokuapp.com/assets/reentry-owl-0957db2dd04486d63801ef01100558398264faec46b1da807b755f4e34f1772f.jpg"></img>
//     <input></input>
// </div>);
// }

//   function Sidebar(props) {
//       return (<div className="box">
//           <Circle></Circle>
//           <div>{props.username}</div>
//           <SideBox></SideBox>
//       </div>);

//   }

// function Circle() {
//       return(
//           <div>
//               <div className="circle"> </div>
//           </div>
//       );
//   }

//   function SideBox(props)  {
//       return (<div>
//           <div> Age: {props.age} </div>
//           <div> Grad Year: {props.grad_year} </div>
//           <div> Past Coursework: </div>
//           <div> Current Coursework: </div>
//           <div> Career Focus/Interest </div>
//           <ul>
//                <li> Connections </li>
//                <li> Contacts </li>
//                <li> Following </li>
//           </ul>
//        </div>);
//   }

// export default SocialNetwork;

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
import LinkTree from "./link_tree";
//import {Route,Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

// social network page using Material-UI
export default function SocialNetwork() {
  const handler = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const grad_year = data.get("grad_year");
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {/* <Avatar alt="owl" src="owl" component={owl}>
                <LockOutlinedIcon />
              </Avatar> */}
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          username
          <Grid container spacing={2}>
            <Grid item xs={8}>
              Age:
            </Grid>
            <Grid item xs={4}>
              Grad Year:
            </Grid>
            <Grid item xs={4}>
              Past Coursework:
            </Grid>
            <Grid item xs={4}>
              Career Focus/Interest
            </Grid>
            <Grid item xs={4}>
              Connections
            </Grid>
            <Grid item xs={4}>
              Contacts
            </Grid>
            <Grid item xs={4}>
              Following
            </Grid>
          </Grid>
        </Typography>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
