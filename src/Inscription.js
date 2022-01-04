import * as React from "react";
import img from "./media/start.jpg";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Link from "@mui/material/Link";
import { Grid, makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles((theme) => ({
  imageCover: {
    [theme.breakpoints.up("md")]: {
      width: "50vw",
      height: "100vh",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "45vh",
    },
  },
  formElement: {
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      height: "100vh",
      width: "50vw",
    },
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      marginTop: "15%",
      marginBottom: "100px",
    },
  },
  formItems: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      top: "25%",
      left: "50%",
      transform: "translateY(-50%)",
      transform: "translateX(-50%)",
    },
  },
}));

export default function Inscription() {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid
          item
          md={6}
          xl={6}
          lg={6}
          component={Box}
          display={{
            xs: "none",
            sm: "none",
            md: "inline-block",
            lg: "inline-block",
            xl: "inline-block",
            xxl: "none",
          }}
        >
          <div>
            <Box component="img" src={img} className={classes.imageCover}></Box>
          </div>
        </Grid>
        <Grid item lg={6} xl={6} md={6} sx={12} className={classes.formElement}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            className={classes.formItems}
          >
            <Typography
              variant="h6"
              style={{
                color: "#1976d2",
                fontWeight: "bold",
                fontFamily: "Arial Black",
                textAlign: "center",
              }}
            >
              Sign up right Now!
            </Typography>
            <TextField
              id="filled-basic"
              label="Enter your Full Name"
              variant="filled"
              size="small"
              style={{ width: "300px" }}
            />
            <TextField
              id="filled-basic"
              label="Enter your Email"
              variant="filled"
              size="small"
              style={{ width: "300px" }}
            />
            <TextField
              id="filled-basic"
              label="Enter your Code"
              variant="filled"
              size="small"
              style={{ width: "300px" }}
            />
            <Button
              size="large"
              variant="contained"
              style={{ fontWeight: "bold", width: "300px" }}
              endIcon={<SendIcon />}
            >
              Sign up
            </Button>
            <Typography
              variant="p"
              style={{ color: "#C0C0C0", spancingRight: "20px" }}
            >
              Have you an account ?{" "}
              <Box variant="div" display="inline" style={{ color: "#1976d2" }}>
                {" "}
                <Link href="/Acctivation" underline="none">
                  {" "}
                  Click Here
                </Link>
              </Box>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
