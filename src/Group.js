import { Grid, makeStyles } from "@material-ui/core";
import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import img from "./media/couv.jpg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import img1 from "./media/profile.jpg";
import Typography from "@mui/material/Typography";
import PublicIcon from "@mui/icons-material/Public";
import ChatIcon from "@mui/icons-material/Chat";
import HistoryIcon from "@mui/icons-material/History";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ComputerIcon from "@mui/icons-material/Computer";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import BackupTableOutlinedIcon from "@mui/icons-material/BackupTableOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import image from "./media/dis-img.png";
import Divider from "@mui/material/Divider";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import { green, pink, red, blue, yellow } from "@mui/material/colors";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import image2 from "./media/NEURONE.jpg";
import StarIcon from "@mui/icons-material/Star";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Group() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#F7F7F7",
    },
    couv: {
      height: "300px",
      background: "url(/static/media/couv.ec5d6b6e.jpg) no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
    },
    btn: {
      position: "relative",
    },
    buttonOne: {
      marginRight: "8px",
    },
    botton: {
      position: "absolute",
      bottom: "5%",
      left: "40%",
      marginBottom: "10px",
      marginLeft: "20px",
    },
    tab: {
      backgroundColor: "#FFF",
      height: "100%",
    },
    topcs: {
      fontWeight: "bolder",
      fontSize: "smaller",
      textTransform: "capitalize",
      textAlign: "right",
      fontStyle: "italic",
    },
    numberTopcs: {
      fontWeight: "bold",
      fontStyle: "italic",
    },
    tabsButton: {
      height: "44px",
      textTransform: "capitalize",
      fontWeight: "600",
    },
    tabsButtons: {
      height: "25%",
      weight: "25%",
      marginTop: "5px",
      [theme.breakpoints.down("md")]: {
        marginLeft: "10%",
        marginBottom: "15px",
        marginTop: "15px",
      },
    },
    photoProfil: {
      borderRadius: "10%",
      border: "7px solid white",
      marginLeft: "8%",
      [theme.breakpoints.up("md")]: {
        marginTop: "-27px",
        width: "150px",
        height: "150px",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "98px",
        width: "100px",
        height: "100px",
      },
    },
    text: {
      [theme.breakpoints.down("sm")]: {
        marginTop: "110px",
      },
    },
    card: {
      width: "230px",
      marginTop: "30px",
      [theme.breakpoints.down("md")]: {
        width: "inherit",
        textAlign: "center",
      },
    },
    cardButtons: {
      position: "absolute",
      bottom: "5%",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "space-around",
      width: "100%",

      // marginLeft: "20px",
    },
    inside: {
      position: "relative",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.couv}></div>
        <Grid container>
          <Grid item md={0.5}></Grid>
          <Grid item md={8} className={classes.btn}>
            <Stack direction="row" className={classes.botton}>
              <Button
                variant="contained"
                size="small"
                className={classes.buttonOne}
                style={{ textTransform: "capitalize", fontStyle: "italic" }}
              >
                Joined
              </Button>
              <Button
                variant="text"
                color="primary"
                size="small"
                style={{
                  backgroundColor: "#FFF",
                  opacity: "0.6",
                  fontStyle: "italic",
                  textTransform: "capitalize",
                }}
              >
                Notifications
              </Button>
            </Stack>
          </Grid>
          <Grid item md={3.5}></Grid>
        </Grid>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            style={{
              borderBottom: 1,
              flexGrow: 1,
              borderColor: "divider",
              backgroundColor: "white",
            }}
          >
            <Grid item xs={12} md={3} className={classes.dataProfil}></Grid>
            <Grid item xs={12} md={6}>
              <Tabs
                value={value}
                onChange={handleChange}
                scrollButtons="auto"
                indicatorColor="primary"
                variant="scrollable"
                scrollButtons //important
                allowScrollButtonsMobile //important
                className={classes.tab}
              >
                <Tab
                  label={
                    <>
                      <span className={classes.topcs}> Discussions </span>
                      <span className={classes.numberTopcs}>430</span>
                    </>
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  label={
                    <>
                      <span className={classes.topcs}> Events</span>
                      <span className={classes.numberTopcs}>3</span>
                    </>
                  }
                  {...a11yProps(1)}
                />
                <Tab
                  label={
                    <>
                      <span className={classes.topcs}> Medias</span>
                      <span className={classes.numberTopcs}>201</span>
                    </>
                  }
                  {...a11yProps(2)}
                />
                <Tab
                  label={
                    <>
                      <span className={classes.topcs}> Members</span>
                      <span className={classes.numberTopcs}>502K</span>
                    </>
                  }
                  {...a11yProps(3)}
                />
              </Tabs>
            </Grid>

            <Grid item xs={12} md={3}>
              <Stack
                spacing={1}
                className={classes.tabsButtons}
                direction="row"
              >
                <Button
                  size="small"
                  variant="outlined"
                  className={classes.tabsButton}
                >
                  Start discussion
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  className={classes.tabsButton}
                >
                  Invit members
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Grid container>
          <Grid item xs={12} md={3} style={{ transform: "translateY(-90px)" }}>
            <Grid container spacing={2}>
              <Grid item md={12} xs={5} sm={3} style={{ textAlign: "center" }}>
                <img className={classes.photoProfil} src={img1} />
                <Typography
                  variant="subtitle1"
                  style={{ color: "#787878", fontWeight: "bold" }}
                >
                  Impressionist
                </Typography>
                <Stack direction="row" justifyContent="center" spacing={0.5}>
                  <PublicIcon fontSize="small" style={{ color: "#909090" }} />
                  <Typography variant="subtitle2" style={{ color: "#909090" }}>
                    Public
                  </Typography>
                </Stack>
              </Grid>

              <Grid item md={12} xs={7} sm={9} className={classes.text}>
                <Typography variant="p" style={{ color: "#787878" }}>
                  This is a group for everyone who want to learn new things and
                  for discussion, please respect the rules of the groups stated
                  by Skill Angles community chart.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={9}>
            <TabPanel value={value} index={0}>
              <Stack direction="row" spacing={1}>
                <Button
                  style={{
                    textTransform: "capitalize",
                    fontStyle: "italic",
                    borderRadius: "20px",
                  }}
                  size="small"
                >
                  <ChatIcon style={{ color: "#2A2E2D" }} size="small" />
                  Discussions
                </Button>
                <Button
                  style={{
                    textTransform: "capitalize",
                    fontStyle: "italic",
                    borderRadius: "20px",
                  }}
                  size="small"
                >
                  <HistoryIcon style={{ color: "#2A2E2D" }} size="small" />{" "}
                  Recent
                </Button>
                <Button
                  style={{
                    textTransform: "capitalize",
                    fontStyle: "italic",
                    borderRadius: "20px",
                  }}
                  size="small"
                >
                  {" "}
                  <StarBorderIcon
                    style={{ color: "#2A2E2D" }}
                    size="small"
                  />{" "}
                  Popular
                </Button>
              </Stack>

              <Grid container spacing={5}>
                <Grid item xs={12} sm={5} md={4}>
                  <Card className={classes.card} sx={{ borderRadius: "20px" }}>
                    <CardMedia component="img" alt="Discussion" image={image} />
                    <Divider />
                    <div className={classes.inside}>
                      <Stack direction="row" className={classes.cardButtons}>
                        <Typography
                          variant="body2"
                          size="small"
                          style={{
                            backgroundColor: "#CFCFCF",
                            textTransform: "capitalize",
                            borderRadius: "3px",
                            fontStyle: "italic",
                            paddingLeft: "8px",
                            paddingRight: "8px",
                          }}
                        >
                          Art & Design
                        </Typography>
                        <Stack direction="row">
                          <LocalFireDepartmentIcon
                            style={{ color: "#FFA200" }}
                          />
                          <Typography
                            variant="body2"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              color: "#787878",
                              fontWeight: "bold",
                            }}
                          >
                            Hot
                          </Typography>
                        </Stack>
                      </Stack>
                    </div>
                    <CardContent>
                      <Typography
                        variant="body2"
                        size="small"
                        style={{
                          textTransform: "capitalize",
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "#000",
                          marginTop: "-10px",
                          fontStyle: "italic",
                        }}
                      >
                        Art Nouveau Technique
                      </Typography>

                      <Stack direction="row" spacing={1}>
                        <Avatar
                          style={{ marginTop: "12px" }}
                          alt="Mark Baryllov"
                          src="/static/images/avatar/1.jpg"
                          sx={{ width: 40, height: 40, bgcolor: green[500] }}
                        />
                        <Typography
                          variant="body2"
                          size="small"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            color: "#000",
                            marginTop: "20px",
                          }}
                        >
                          Mark Baryllov
                        </Typography>
                      </Stack>

                      <Stack direction="row" style={{ color: "#BFBFBF" }}>
                        <Stack direction="row" spacing={0.5}>
                          <FavoriteIcon style={{ marginTop: "18px" }} />
                          <Typography
                            variant="caption"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "bold",
                              marginTop: "20px",
                            }}
                          >
                            12K
                          </Typography>
                        </Stack>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          style={{ marginLeft: "80px" }}
                        >
                          <ModeCommentIcon style={{ marginTop: "18px" }} />
                          <Typography
                            variant="caption"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "bold",
                              marginTop: "20px",
                            }}
                          >
                            520
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={0.5}
                        style={{ color: "#BFBFBF" }}
                      >
                        <RemoveRedEyeIcon style={{ marginTop: "18px" }} />
                        <Typography
                          variant="caption"
                          size="small"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            marginTop: "20px",
                          }}
                        >
                          260k
                        </Typography>
                      </Stack>
                      <Typography
                        variant="caption"
                        size="small"
                        style={{
                          textTransform: "capitalize",
                          fontWeight: "bold",
                          marginTop: "50px",
                          color: "#BFBFBF",
                          marginLeft: "110px",
                        }}
                      >
                        2 weeks ago
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={5} md={4}>
                  <Card className={classes.card} sx={{ borderRadius: "20px" }}>
                    <CardMedia component="img" alt="Discussion" image={image} />
                    <Divider />
                    <div className={classes.inside}>
                      <Stack direction="row" className={classes.cardButtons}>
                        <Typography
                          variant="body2"
                          size="small"
                          style={{
                            backgroundColor: "#CFCFCF",
                            textTransform: "capitalize",
                            borderRadius: "3px",
                            fontStyle: "italic",
                            paddingLeft: "8px",
                            paddingRight: "8px",
                          }}
                        >
                          WaterColor
                        </Typography>
                        <Stack direction="row">
                          <FavoriteIcon style={{ color: "#53BD1B" }} />
                          <Typography
                            variant="body2"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              color: "#787878",
                              fontWeight: "bold",
                            }}
                          >
                            Active
                          </Typography>
                        </Stack>
                      </Stack>
                    </div>
                    <CardContent>
                      <Typography
                        variant="body2"
                        size="small"
                        style={{
                          textTransform: "capitalize",
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "#000",
                          marginTop: "-10px",
                          fontStyle: "italic",
                        }}
                      >
                        WaterColor Technique
                      </Typography>

                      <Stack direction="row" spacing={1}>
                        <Avatar
                          style={{ marginTop: "12px" }}
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                          sx={{ width: 40, height: 40, bgcolor: pink[500] }}
                        />
                        <Typography
                          variant="body2"
                          size="small"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            color: "#000",
                            marginTop: "20px",
                          }}
                        >
                          Remy Sharp
                        </Typography>
                      </Stack>

                      <Stack direction="row" style={{ color: "#BFBFBF" }}>
                        <Stack direction="row" spacing={0.5}>
                          <FavoriteIcon style={{ marginTop: "18px" }} />
                          <Typography
                            variant="caption"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "bold",
                              marginTop: "20px",
                            }}
                          >
                            2K
                          </Typography>
                        </Stack>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          style={{ marginLeft: "80px" }}
                        >
                          <ModeCommentIcon style={{ marginTop: "18px" }} />
                          <Typography
                            variant="caption"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "bold",
                              marginTop: "20px",
                            }}
                          >
                            26
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={0.5}
                        style={{ color: "#BFBFBF" }}
                      >
                        <RemoveRedEyeIcon style={{ marginTop: "18px" }} />
                        <Typography
                          variant="caption"
                          size="small"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            marginTop: "20px",
                          }}
                        >
                          29.2k
                        </Typography>
                      </Stack>
                      <Typography
                        variant="caption"
                        size="small"
                        style={{
                          textTransform: "capitalize",
                          fontWeight: "bold",
                          marginTop: "50px",
                          color: "#BFBFBF",
                          marginLeft: "110px",
                        }}
                      >
                        3 days ago
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={5} md={4}>
                  <Card className={classes.card} sx={{ borderRadius: "20px" }}>
                    <CardMedia component="img" alt="Discussion" image={image} />
                    <Divider />
                    <div className={classes.inside}>
                      <Stack direction="row" className={classes.cardButtons}>
                        <Typography
                          variant="body2"
                          size="small"
                          style={{
                            backgroundColor: "#CFCFCF",
                            textTransform: "capitalize",
                            borderRadius: "3px",
                            fontStyle: "italic",
                            paddingLeft: "8px",
                            paddingRight: "8px",
                          }}
                        >
                          Modern Art
                        </Typography>
                        <Stack direction="row">
                          <LocalFireDepartmentIcon
                            style={{ color: "#FFA200" }}
                          />
                          <Typography
                            variant="body2"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              color: "#787878",
                              fontWeight: "bold",
                            }}
                          >
                            Hot
                          </Typography>
                        </Stack>
                      </Stack>
                    </div>
                    <CardContent>
                      <Typography
                        variant="body2"
                        size="small"
                        style={{
                          textTransform: "capitalize",
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "#000",
                          marginTop: "-10px",
                          fontStyle: "italic",
                        }}
                      >
                        Art Nouveau Technique
                      </Typography>

                      <Stack direction="row" spacing={1}>
                        <Avatar
                          style={{ marginTop: "12px" }}
                          alt="Travis Howard"
                          src="/static/images/avatar/1.jpg"
                          sx={{ width: 40, height: 40, bgcolor: red[500] }}
                        />
                        <Typography
                          variant="body2"
                          size="small"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            color: "#000",
                            marginTop: "20px",
                          }}
                        >
                          Travis Howard
                        </Typography>
                      </Stack>

                      <Stack direction="row" style={{ color: "#BFBFBF" }}>
                        <Stack direction="row" spacing={0.5}>
                          <FavoriteIcon style={{ marginTop: "18px" }} />
                          <Typography
                            variant="caption"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "bold",
                              marginTop: "20px",
                            }}
                          >
                            10K
                          </Typography>
                        </Stack>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          style={{ marginLeft: "80px" }}
                        >
                          <ModeCommentIcon style={{ marginTop: "18px" }} />
                          <Typography
                            variant="caption"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "bold",
                              marginTop: "20px",
                            }}
                          >
                            336
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={0.5}
                        style={{ color: "#BFBFBF" }}
                      >
                        <RemoveRedEyeIcon style={{ marginTop: "18px" }} />
                        <Typography
                          variant="caption"
                          size="small"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            marginTop: "20px",
                          }}
                        >
                          320k
                        </Typography>
                      </Stack>
                      <Typography
                        variant="caption"
                        size="small"
                        style={{
                          textTransform: "capitalize",
                          fontWeight: "bold",
                          marginTop: "50px",
                          color: "#BFBFBF",
                          marginLeft: "110px",
                        }}
                      >
                        28 days ago
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}></TabPanel>
            <TabPanel value={value} index={2}>
              <Stack direction="row" spacing={1}>
                <Button
                  style={{
                    textTransform: "capitalize",
                    fontStyle: "italic",
                    borderRadius: "20px",
                  }}
                  size="small"
                >
                  <ComputerIcon style={{ color: "#2A2E2D" }} size="small" />
                  Courses
                </Button>
                <Button
                  style={{
                    textTransform: "capitalize",
                    fontStyle: "italic",
                    borderRadius: "20px",
                  }}
                  size="small"
                >
                  <VideoSettingsIcon
                    style={{ color: "#2A2E2D" }}
                    size="small"
                  />{" "}
                  Videos
                </Button>
                <Button
                  style={{
                    textTransform: "capitalize",
                    fontStyle: "italic",
                    borderRadius: "20px",
                  }}
                  size="small"
                >
                  {" "}
                  <ImageOutlinedIcon
                    style={{ color: "#2A2E2D" }}
                    size="small"
                  />{" "}
                  Images
                </Button>

                <Button
                  style={{
                    textTransform: "capitalize",
                    fontStyle: "italic",
                    borderRadius: "20px",
                  }}
                  size="small"
                >
                  {" "}
                  <BackupTableOutlinedIcon
                    style={{ color: "#2A2E2D" }}
                    size="small"
                  />{" "}
                  Files
                </Button>
              </Stack>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={5} md={4}>
                  <Card className={classes.card} sx={{ borderRadius: "20px" }}>
                    <CardMedia
                      component="img"
                      alt="Discussion"
                      image={image2}
                    />
                    <Divider />
                    <CardContent>
                      <Typography
                        variant="body2"
                        size="small"
                        style={{
                          textTransform: "capitalize",
                          fontWeight: "bold",
                          color: "#000",
                          marginTop: "-10px",
                          fontStyle: "italic",
                        }}
                      >
                        Programming Controllers with Python
                      </Typography>

                      <Stack direction="row" spacing={1}>
                        <Avatar
                          style={{ marginTop: "12px" }}
                          alt="Mark Baryllov"
                          src="/static/images/avatar/1.jpg"
                          sx={{ width: 40, height: 40, bgcolor: blue[500] }}
                        />
                        <Typography
                          variant="body2"
                          size="small"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            color: "#000",
                            marginTop: "20px",
                          }}
                        >
                          Mark Baryllov
                        </Typography>
                      </Stack>

                      <Stack direction="row" style={{ marginTop: "13px" }}>
                        <StarIcon style={{ color: "#FFA200" }} />
                        <StarIcon style={{ color: "#FFA200" }} />
                        <StarIcon style={{ color: "#FFA200" }} />
                        <StarIcon style={{ color: "#FFA200" }} />
                        <StarIcon style={{ color: "#787878" }} />
                        <Typography
                          variant="body2"
                          size="small"
                          style={{
                            textTransform: "capitalize",
                            color: "#787878",
                            fontWeight: "bold",
                            marginLeft: "5px",
                            marginTop: "2px",
                          }}
                        >
                          (984)
                        </Typography>
                      </Stack>

                      <Stack direction="row" style={{ color: "#BFBFBF" }}>
                        <Stack direction="row" spacing={0.5}>
                          <Stack
                            direction="row"
                            spacing={0.5}
                            style={{ color: "#BFBFBF" }}
                          >
                            <RemoveRedEyeIcon style={{ marginTop: "18px" }} />
                            <Typography
                              variant="caption"
                              size="small"
                              style={{
                                textTransform: "capitalize",
                                fontWeight: "bold",
                                marginTop: "20px",
                              }}
                            >
                              6k
                            </Typography>
                          </Stack>
                        </Stack>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          style={{ marginLeft: "75px" }}
                        >
                          <Typography
                            variant="caption"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "bold",
                              marginTop: "20px",
                            }}
                          >
                            2 days ago
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={5} md={4}>
                  <Card className={classes.card} sx={{ borderRadius: "20px" }}>
                    <CardMedia
                      component="img"
                      alt="Discussion"
                      image={image2}
                    />
                    <Divider />
                    <CardContent>
                      <Typography
                        variant="body2"
                        size="small"
                        style={{
                          textTransform: "capitalize",
                          fontWeight: "bold",
                          color: "#000",
                          marginTop: "-10px",
                          fontStyle: "italic",
                        }}
                      >
                        Programming Controllers with Python
                      </Typography>

                      <Stack direction="row" spacing={1}>
                        <Avatar
                          style={{ marginTop: "12px" }}
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                          sx={{ width: 40, height: 40, bgcolor: pink[500] }}
                        />
                        <Typography
                          variant="body2"
                          size="small"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            color: "#000",
                            marginTop: "20px",
                          }}
                        >
                          Remy Sharp
                        </Typography>
                      </Stack>
                      <Stack direction="row" style={{ marginTop: "13px" }}>
                        <StarIcon style={{ color: "#FFA200" }} />
                        <StarIcon style={{ color: "#FFA200" }} />
                        <StarIcon style={{ color: "#FFA200" }} />
                        <StarIcon style={{ color: "#787878" }} />
                        <StarIcon style={{ color: "#787878" }} />
                        <Typography
                          variant="body2"
                          size="small"
                          style={{
                            textTransform: "capitalize",
                            color: "#787878",
                            fontWeight: "bold",
                            marginLeft: "5px",
                            marginTop: "2px",
                          }}
                        >
                          (4221)
                        </Typography>
                      </Stack>

                      <Stack direction="row" style={{ color: "#BFBFBF" }}>
                        <Stack direction="row" spacing={0.5}>
                          <Stack
                            direction="row"
                            spacing={0.5}
                            style={{ color: "#BFBFBF" }}
                          >
                            <RemoveRedEyeIcon style={{ marginTop: "18px" }} />
                            <Typography
                              variant="caption"
                              size="small"
                              style={{
                                textTransform: "capitalize",
                                fontWeight: "bold",
                                marginTop: "20px",
                              }}
                            >
                              13k
                            </Typography>
                          </Stack>
                        </Stack>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          style={{ marginLeft: "75px" }}
                        >
                          <Typography
                            variant="caption"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "bold",
                              marginTop: "20px",
                            }}
                          >
                            1 week ago
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={5} md={4}>
                  <Card className={classes.card} sx={{ borderRadius: "20px" }}>
                    <CardMedia
                      component="img"
                      alt="Discussion"
                      image={image2}
                    />
                    <Divider />
                    <CardContent>
                      <Typography
                        variant="body2"
                        size="small"
                        style={{
                          textTransform: "capitalize",
                          fontWeight: "bold",
                          color: "#000",
                          marginTop: "-10px",
                          fontStyle: "italic",
                        }}
                      >
                        Programming Controllers with Python
                      </Typography>

                      <Stack direction="row" spacing={1}>
                        <Avatar
                          style={{ marginTop: "12px" }}
                          alt="Travis Howard"
                          src="/static/images/avatar/1.jpg"
                          sx={{ width: 40, height: 40, bgcolor: yellow[500] }}
                        />
                        <Typography
                          variant="body2"
                          size="small"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            color: "#000",
                            marginTop: "20px",
                          }}
                        >
                          Travis Howard
                        </Typography>
                      </Stack>
                      <Stack direction="row" style={{ marginTop: "13px" }}>
                        <StarIcon style={{ color: "#FFA200" }} />
                        <StarIcon style={{ color: "#FFA200" }} />
                        <StarIcon style={{ color: "#FFA200" }} />
                        <StarIcon style={{ color: "#FFA200" }} />
                        <StarIcon style={{ color: "#FFA200" }} />
                        <Typography
                          variant="body2"
                          size="small"
                          style={{
                            textTransform: "capitalize",
                            color: "#787878",
                            fontWeight: "bold",
                            marginLeft: "5px",
                            marginTop: "2px",
                          }}
                        >
                          (320)
                        </Typography>
                      </Stack>

                      <Stack direction="row" style={{ color: "#BFBFBF" }}>
                        <Stack direction="row" spacing={0.5}>
                          <Stack
                            direction="row"
                            spacing={0.5}
                            style={{ color: "#BFBFBF" }}
                          >
                            <RemoveRedEyeIcon style={{ marginTop: "18px" }} />
                            <Typography
                              variant="caption"
                              size="small"
                              style={{
                                textTransform: "capitalize",
                                fontWeight: "bold",
                                marginTop: "20px",
                              }}
                            >
                              5k
                            </Typography>
                          </Stack>
                        </Stack>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          style={{ marginLeft: "75px" }}
                        >
                          <Typography
                            variant="caption"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "bold",
                              marginTop: "20px",
                            }}
                          >
                            3 days ago
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}></TabPanel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
