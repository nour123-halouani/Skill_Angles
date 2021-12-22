import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import TheatersIcon from "@mui/icons-material/Theaters";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import GroupIcon from "@mui/icons-material/Group";
import Avatar from "@mui/material/Avatar";
import { green, pink, blue } from "@mui/material/colors";
import Link from "@mui/material/Link";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import BusinessIcon from "@mui/icons-material/Business";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BuildIcon from "@mui/icons-material/Build";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageIcon from "@mui/icons-material/Image";
import {  makeStyles } from "@material-ui/core";


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  list: {
    marginTop: "60px",
    position: "fixed",
    backgroundColor: "#F7F7F7",
    height: "100%",

  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F0F0F0",
  "&:hover": {
    backgroundColor: "#F9F9F9",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  color: "#787878",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // Color: '#000'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));

function NavbarHome(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <Toolbar style={{ backgroundColor: "#FFF" }}>
        {" "}
        <Box
          variant="div"
          display="inline"
          style={{
            color: "#1976d2",
            fontFamily: "Brush Script MT, Brush Script Std, cursive",
            fontSize: 32,
          }}
        >
          Skill angles
        </Box>
      </Toolbar>
      {/* <Divider /> */}
      <List className={classes.list}>
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
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} sx={{ p: 1.15, pr: 9, pl: 3 }}>
        {" "}
        <AccountCircle sx={{ pr: 1.15 }} /> Full Name{" "}
      </MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{ p: 1.15, pr: 9, pl: 3 }}>
        {" "}
        <NotificationsIcon sx={{ pr: 1.15 }} /> My notifications{" "}
      </MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{ p: 1.15, pr: 9, pl: 3 }}>
        {" "}
        <MailIcon sx={{ pr: 1.15 }} /> My messages{" "}
      </MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{ p: 1.15, pr: 9, pl: 3 }}>
        {" "}
        <SettingsIcon sx={{ pr: 1.15 }} /> Settings{" "}
      </MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{ p: 1.15, pr: 9, pl: 3 }}>
        {" "}
        <TheatersIcon sx={{ pr: 1.15 }} /> Studio creator
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        sx={{ p: 1.15, pr: 9, pl: 3 }}
        style={{ backgroundColor: "#F7F7F7" }}
      >
        {" "}
        <HelpIcon sx={{ pr: 1.15 }} /> Help{" "}
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        sx={{ p: 1.15, pr: 9, pl: 3 }}
        style={{ backgroundColor: "#F7F7F7" }}
      >
        {" "}
        <LogoutIcon sx={{ pr: 1.15 }} /> Log out{" "}
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="primary">
            <HomeIcon />
          </Badge>
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="primary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ backgroundColor: "#FFF" }}>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Box
            variant="div"
            display="inline"
            style={{
              color: "#1976d2",
              fontFamily: "Brush Script MT, Brush Script Std, cursive",
              fontSize: 32,
            }}
          >
            Skill angles
          </Box> */}
          {/* </Typography> */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" aria-label="home page">
              <Badge badgeContent={5} color="primary">
                <HomeIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails">
              <Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="show 17 new notifications">
              <Badge badgeContent={17} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              color: "primary",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </Box>
  );
}

NavbarHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavbarHome;
