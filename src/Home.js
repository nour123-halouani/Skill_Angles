import * as React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import GroupIcon from "@mui/icons-material/Group";
import Avatar from "@mui/material/Avatar";
import { green, pink, blue } from "@mui/material/colors";
import PropTypes from "prop-types";
import Link from "@mui/material/Link";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import BusinessIcon from "@mui/icons-material/Business";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BuildIcon from "@mui/icons-material/Build";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import img1 from "./tab1.jpg";
import img2 from "./tab2.jpg";
import StarIcon from "@mui/icons-material/Star";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

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

export default function Home(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#F7F7F7",
      marginLeft: "200px",
      // marginTop:"-50px",
      width: "calc(100% - 200px)",
      [theme.breakpoints.down("xs")]: {
        marginLeft: "0px",
        width: "calc(100% - 0px)",
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: "-50px",
      },
      [theme.breakpoints.only("md")]: {
        marginTop: "-50px",
      },
      [theme.breakpoints.only("sm")]: {
        marginTop: "-40px",
      },
      [theme.breakpoints.only("xs")]: {
        marginTop: "-40px",
      },
    },
    // list: {
    //   width: "229px",
    //   marginTop: "60px",
    //   position: "fixed",
    //   backgroundColor: "#F7F7F7",
    //   height: "100%",
    //   borderRight: "1px solid #C8C8C8",
    //   [theme.breakpoints.down("xs")]: {
    //     width: "50px",
    //   },
    // },
    // gridOne: {
    //   marginTop: "70px",
    // },
    tab: {
      backgroundColor: "#F7F7F7",
      borderBottom: "1px solid #C8C8C8",
      // height:"60px",
      // marginTop:"-12px"
    },
    tabs: {
      fontWeight: "bold",
      textTransform: "capitalize",
    },
    gridTwo: {
      // marginTop: "80px",
      paddingLeft: "20px",
    },
    groupDetails: {
      backgroundColor: "#CFCFCF",
      padding: "10px",
      // [theme.breakpoints.down("md")]: {
      alignItems: "center",
      // },
    },
    subButton: {
      borderRadius: "50px",
      textTransform: "capitalize",
      // [theme.breakpoints.up("md")]: {
      //   marginLeft: "50px",
      // },
    },
    btnSub: {
      borderRadius: "50px",
      textTransform: "capitalize",
    },
    card1: {
      borderRadius: "20px",
    },
    card2: {
      borderRadius: "20px",
    },
    relativeContent: {
      position: "relative",
    },
    // cardOneContent:{
    //   alignSelf: "center",
    // }
    footerCard: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginTop: "10px",
      marginBottom: "-8px",
    },
    rightButtons: {
      display: "flex",
    },
  }));
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <List className={classes.list}>
        <ListItem style={{ marginBottom: "20px" }}>
          <Stack direction="column" style={{ color: "#787878" }}>
            <Stack direction="row" spacing={1}>
              <HomeIcon style={{ marginTop: "18px" }} />
              <Typography
                variant="body2"
                size="small"
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  marginTop: "21px",
                }}
              >
                <Link href="#" underline="none" style={{ color: "#787878" }}>
                  Home
                </Link>
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <TrendingUpIcon style={{ marginTop: "18px" }} />
              <Typography
                variant="body2"
                size="small"
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  marginTop: "20px",
                }}
              >
                trends
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <ExploreIcon style={{ marginTop: "18px" }} />
              <Typography
                variant="body2"
                size="small"
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  marginTop: "20px",
                }}
              >
                Explore
              </Typography>
            </Stack>
          </Stack>
        </ListItem>
        <Divider />
        <ListItem style={{ marginBottom: "30px" }}>
          <Stack direction="column" style={{ color: "#787878" }}>
            <Stack direction="row" spacing={1}>
              <FavoriteIcon style={{ marginTop: "18px" }} />
              <Typography
                variant="body2"
                size="small"
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  marginTop: "20px",
                }}
              >
                Saved
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <RemoveRedEyeIcon style={{ marginTop: "18px" }} />
              <Typography
                variant="body2"
                size="small"
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  marginTop: "20px",
                }}
              >
                most viewed
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <ThumbUpIcon style={{ marginTop: "18px" }} />
              <Typography
                variant="body2"
                size="small"
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  marginTop: "20px",
                }}
              >
                liked
              </Typography>
            </Stack>
          </Stack>
        </ListItem>
        <Divider />
        <ListItem>
          <Stack direction="column" style={{ color: "#787878" }}>
            <Stack direction="row" spacing={1}>
              <GroupIcon style={{ marginTop: "18px" }} />
              <Typography
                variant="body2"
                size="small"
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  marginTop: "20px",
                }}
              >
                Groups
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Avatar
                alt="Arts"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 35, height: 35, bgcolor: pink[500] }}
                style={{ marginTop: "18px" }}
              />{" "}
              <Typography
                variant="body2"
                size="small"
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  marginTop: "25px",
                }}
              >
                Arts
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Avatar
                alt="Bricolage"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 35, height: 35, bgcolor: green[500] }}
                style={{ marginTop: "18px" }}
              />{" "}
              <Typography
                variant="body2"
                size="small"
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  marginTop: "25px",
                }}
              >
                Bricolage
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Avatar
                alt="littérature"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 35, height: 35, bgcolor: blue[500] }}
                style={{ marginTop: "18px" }}
              />
              <Typography
                variant="body2"
                size="small"
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  marginTop: "25px",
                }}
              >
                littérature
              </Typography>
            </Stack>
          </Stack>
        </ListItem>
      </List> */}

      <Grid container className={classes.root}>
        <Grid item md={9} sm={12} xs={12} className={classes.gridOne}>
          <Tabs
            className={classes.tab}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            scrollButtons="auto"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons //important
            allowScrollButtonsMobile //important
          >
            <Tab
              className={classes.tabs}
              style={{ fontWeight: "bold", textTransform: "capitalize" }}
              icon={<DeveloperBoardIcon />}
              iconPosition="start"
              label="Development"
              {...a11yProps(0)}
            />
            <Tab
              className={classes.tabs}
              style={{ fontWeight: "bold", textTransform: "capitalize" }}
              icon={<BusinessIcon />}
              iconPosition="start"
              label="Business"
              {...a11yProps(1)}
            />
            <Tab
              className={classes.tabs}
              style={{ fontWeight: "bold", textTransform: "capitalize" }}
              icon={<DesktopMacIcon />}
              iconPosition="start"
              label="IT and software"
              {...a11yProps(2)}
            />
            <Tab
              className={classes.tabs}
              style={{ fontWeight: "bold", textTransform: "capitalize" }}
              icon={<DesignServicesIcon />}
              iconPosition="start"
              label="Design"
              {...a11yProps(3)}
            />
            <Tab
              className={classes.tabs}
              style={{ fontWeight: "bold", textTransform: "capitalize" }}
              icon={<BuildIcon />}
              iconPosition="start"
              label="Marketing"
              {...a11yProps(4)}
            />
            <Tab
              className={classes.tabs}
              style={{ fontWeight: "bold", textTransform: "capitalize" }}
              icon={<LightbulbIcon />}
              iconPosition="start"
              label="Marketing"
              {...a11yProps(5)}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Stack
              style={{ display: "flex" }}
              className={classes.groupDetails}
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, md: 3 }}
            >
              <Avatar
                alt="Animation"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 35, height: 35, bgcolor: pink[500] }}
              />
              <Typography
                variant="body1"
                style={{ color: "#1976d2", fontWeight: "bold" }}
              >
                Animation
              </Typography>

              <Stack direction="column" alignItems="center">
                <Typography
                  variant="body2"
                  style={{ color: "#8E8E8E", fontWeight: "bold" }}
                >
                  Items
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: "#6D6D6D", fontWeight: "bold" }}
                >
                  23K
                </Typography>
              </Stack>
              <Stack direction="column" alignItems="center">
                <Typography
                  variant="body2"
                  style={{ color: "#8E8E8E", fontWeight: "bold" }}
                >
                  Followers
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: "#6D6D6D", fontWeight: "bold" }}
                >
                  528K
                </Typography>
              </Stack>
              <Stack direction="column" alignItems="center">
                <Typography
                  variant="body2"
                  style={{ color: "#8E8E8E", fontWeight: "bold" }}
                >
                  Intructors
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: "#6D6D6D", fontWeight: "bold" }}
                >
                  23K
                </Typography>
              </Stack>
              <Button
                variant="outlined"
                size="small"
                className={classes.btnSub}
                style={{
                  marginLeft: "auto",
                  borderRadius: "50px",
                  textTransform: "capitalize",
                }}
              >
                Subscribe
              </Button>
            </Stack>
            <Typography
              variant="h6"
              style={{
                color: "#6D6D6D",
                fontWeight: "bold",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Top rating in this section
            </Typography>
            <Grid container spacing={5}>
              <Grid item md={5} xs={12} sm={12}>
                <Card sx={{ maxWidth: 345 }} className={classes.card1}>
                  <div className={classes.relativeContent}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img2}
                      alt="photo"
                    />
                    <CardContent>
                      <Stack
                        direction="column"
                        spacing={1}
                        style={{ alignItems: "center" }}
                      >
                        <Avatar
                          alt="Luis Walker"
                          src="/static/images/avatar/1.jpg"
                          sx={{ width: 70, height: 70, bgcolor: green[500] }}
                          style={{ marginTop: "-50px" }}
                        />
                        <Typography
                          variant="body2"
                          style={{ color: "#6D6D6D", fontWeight: "bold" }}
                        >
                          Luis Walker
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{
                            color: "#BFBFBF",
                            fontWeight: "bold",
                            marginTop: "-3px",
                          }}
                        >
                          Artist, Design
                        </Typography>
                      </Stack>
                      <Stack style={{ marginTop: "7px" }} direction="column">
                        <Stack direction="row" spacing={0.5}>
                          <FavoriteIcon
                            style={{ marginTop: "18px", color: "#BFBFBF" }}
                          />
                          <Typography
                            variant="caption"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "bold",
                              marginTop: "20px",
                              color: "#1976d2",
                            }}
                          >
                            250K followers
                          </Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.5}>
                          <StarIcon
                            style={{ marginTop: "18px", color: "#BFBFBF" }}
                          />
                          <Typography
                            variant="caption"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "bold",
                              marginTop: "20px",
                              color: "#1976d2",
                            }}
                          >
                            800 starts
                          </Typography>
                        </Stack>{" "}
                        <Stack direction="row" spacing={0.5}>
                          <LibraryBooksIcon
                            style={{ marginTop: "18px", color: "#BFBFBF" }}
                          />
                          <Typography
                            variant="caption"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              fontWeight: "bold",
                              marginTop: "20px",
                              color: "#1976d2",
                            }}
                          >
                            18 Courses
                          </Typography>
                        </Stack>
                      </Stack>
                      <Divider style={{ marginTop: "10px" }} />
                      <div className={classes.footerCard}>
                        <StarBorderIcon style={{ color: "#BFBFBF" }} />
                        <Button
                          variant="outlined"
                          size="small"
                          className={classes.subButton}
                          style={{
                            borderRadius: "50px",
                            textTransform: "capitalize",
                          }}
                        >
                          Follow
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
              <Grid item md={7} xs={12} sm={12}>
                <Card className={classes.card2}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={img1}
                    alt="photo2"
                  />
                  <CardContent>
                    <Stack direction="row" spacing={2}>
                      <Stack direction="row" spacing={0.5}>
                        <FavoriteIcon
                          style={{ marginTop: "18px", color: "#BFBFBF" }}
                        />
                        <Typography
                          variant="caption"
                          size="small"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            marginTop: "20px",
                            color: "#1976d2",
                          }}
                        >
                          31.5K
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={0.5}>
                        <RemoveRedEyeIcon
                          style={{ marginTop: "18px", color: "#BFBFBF" }}
                        />
                        <Typography
                          variant="caption"
                          size="small"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            marginTop: "20px",
                            color: "#1976d2",
                          }}
                        >
                          400K
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={0.5}>
                        <TrendingUpIcon
                          style={{ marginTop: "18px", color: "#BFBFBF" }}
                        />
                        <Typography
                          variant="caption"
                          size="small"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            marginTop: "20px",
                            color: "#1976d2",
                          }}
                        >
                          8K
                        </Typography>
                      </Stack>
                    </Stack>
                    <Typography
                      variant="body1"
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "bold",
                        marginTop: "20px",
                        color: "#6D6D6D",
                      }}
                    >
                      First Steps On Painting With Oil
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Avatar
                        alt="Luis walker"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 35, height: 35, bgcolor: pink[500] }}
                        style={{ marginTop: "18px" }}
                      />{" "}
                      <Typography
                        variant="body2"
                        size="small"
                        style={{
                          textTransform: "capitalize",
                          fontWeight: "bold",
                          marginTop: "25px",
                          color: "#BFBFBF",
                          marginBottom: "25px",
                        }}
                      >
                        Luis Walker
                      </Typography>
                    </Stack>
                    <Typography
                      variant="caption"
                      size="small"
                      style={{
                        color: "#BFBFBF",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                      }}
                    >
                      2 months ago
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item six
          </TabPanel>
        </Grid>

        <Grid
          item
          component={Box}
          md={3}
          display={{ xs: "none", sm: "none", md: "block" }}
          className={classes.gridTwo}
        >
          <Typography
            variant="h6"
            style={{
              color: "#6D6D6D",
              fontWeight: "bold",
              marginTop: "20px",
              // marginBottom: "20px",
            }}
          >
            Trending instructors
          </Typography>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
            }}
          >
            <Stack direction="row">
              <Button
                size="small"
                color="primary"
                style={{ textTransform: "capitalize" }}
              >
                Reload
              </Button>
              <Button
                size="small"
                color="primary"
                style={{ textTransform: "capitalize" }}
              >
                Show all
              </Button>
            </Stack>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <Typography
                      component="span"
                      variant="body1"
                      style={{ fontWeight: "bold", color: "#6D6D6D" }}
                    >
                      Michal A.Rodriges
                    </Typography>
                  </>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="caption"
                      style={{
                        fontWeight: "bolder",
                        color: "#BFBFBF",
                        fontStyle: "italic",
                      }}
                    >
                      @Programmer
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <div className={classes.rightButtons}>
              <Button
                variant="outlined"
                size="small"
                className={classes.subButton}
                style={{
                  marginLeft: "auto",
                  borderRadius: "50px",
                  textTransform: "capitalize",
                }}
              >
                Follow
              </Button>
            </div>
            <Divider
              variant="inset"
              component="li"
              style={{ marginTop: "10px" }}
            />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <Typography
                      component="span"
                      variant="body1"
                      style={{ fontWeight: "bold", color: "#6D6D6D" }}
                    >
                      Michal A.Rodriges
                    </Typography>
                  </>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="caption"
                      style={{
                        fontWeight: "bolder",
                        color: "#BFBFBF",
                        fontStyle: "italic",
                      }}
                    >
                      @Programmer
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <div className={classes.rightButtons}>
              <Button
                variant="outlined"
                size="small"
                className={classes.subButton}
                style={{
                  marginLeft: "auto",
                  borderRadius: "50px",
                  textTransform: "capitalize",
                }}
              >
                Follow
              </Button>
            </div>
            <Divider
              variant="inset"
              component="li"
              style={{ marginTop: "10px" }}
            />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <Typography
                      component="span"
                      variant="body1"
                      style={{ fontWeight: "bold", color: "#6D6D6D" }}
                    >
                      Michal A.Rodriges
                    </Typography>
                  </>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="caption"
                      style={{
                        fontWeight: "bolder",
                        color: "#BFBFBF",
                        fontStyle: "italic",
                      }}
                    >
                      @Programmer
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </List>
          <div className={classes.rightButtons}>
            <Button
              variant="outlined"
              size="small"
              className={classes.subButton}
              style={{
                marginLeft: "auto",
                borderRadius: "50px",
                textTransform: "capitalize",
              }}
            >
              Follow
            </Button>
          </div>
          <Divider style={{ marginTop: "10px" }} />
          <Typography
            variant="h6"
            style={{
              color: "#6D6D6D",
              fontWeight: "bold",
              marginTop: "20px",
              // marginBottom: "20px",
            }}
          >
            Suggest group
          </Typography>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
            }}
          >
            <Stack direction="row">
              <Button
                size="small"
                color="primary"
                style={{ textTransform: "capitalize" }}
              >
                Reload
              </Button>
              <Button
                size="small"
                color="primary"
                style={{ textTransform: "capitalize" }}
              >
                Show all
              </Button>
            </Stack>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <Typography
                      component="span"
                      variant="body1"
                      style={{ fontWeight: "bold", color: "#6D6D6D" }}
                    >
                      Michal A.Rodriges
                    </Typography>
                  </>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="caption"
                      style={{
                        fontWeight: "bolder",
                        color: "#BFBFBF",
                        fontStyle: "italic",
                      }}
                    >
                      @Programmer
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <div className={classes.rightButtons}>
              <Button
                variant="outlined"
                size="small"
                className={classes.subButton}
                style={{
                  marginLeft: "auto",
                  borderRadius: "50px",
                  textTransform: "capitalize",
                }}
              >
                Follow
              </Button>
            </div>
            <Divider
              variant="inset"
              component="li"
              style={{ marginTop: "10px" }}
            />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <Typography
                      component="span"
                      variant="body1"
                      style={{ fontWeight: "bold", color: "#6D6D6D" }}
                    >
                      Michal A.Rodriges
                    </Typography>
                  </>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="caption"
                      style={{
                        fontWeight: "bolder",
                        color: "#BFBFBF",
                        fontStyle: "italic",
                      }}
                    >
                      @Programmer
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <div className={classes.rightButtons}>
              <Button
                variant="outlined"
                size="small"
                className={classes.subButton}
                style={{
                  marginLeft: "auto",
                  borderRadius: "50px",
                  textTransform: "capitalize",
                }}
              >
                Follow
              </Button>
            </div>
          </List>
        </Grid>
      </Grid>
    </>
  );
}
