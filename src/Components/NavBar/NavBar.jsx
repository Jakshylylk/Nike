import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { alpha, Button, styled } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { Link, NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LiveSearch from "../LiveSearch/LiveSearch";
import { useLocation } from "react-router-dom";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { basketContext } from "../../Context/BasketContextProvider";
import Sidebar from "../Drawer/Drawer";
import { authContext } from "../../Context/AuthContextProvider";
import { AccountCircle } from "@mui/icons-material";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { basketCount } = React.useContext(basketContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, handleLogOut } = React.useContext(authContext);
  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "30px",
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
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
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { md: "flex" },
              width: 140,
              height: 65,
            }}>
            {
              <img src="https://www.freeiconspng.com/thumbs/nike-logo/black-nike-logo-no-background-20.jpg" />
            }
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", justifyContent: "space-evenly" },
            }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            LOGO
          </Typography>

          <Box
            sx={{
              width: "60%",
              display: "flex",
              justifyContent: "space-around",
            }}>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/add">ADD PRODUCT</NavLink>
            {location.pathname === "/list" ? (
              <span style={{ cursor: "pointer", color: "black" }}>
                Products List
              </span>
            ) : (
              <NavLink to="/list">PRODUCTS LIST</NavLink>
            )}
          </Box>
          <LiveSearch />

          <Box sx={{ flexGrow: 0 }}>
            <Link to="/basket">
              <Badge badgeContent={basketCount} color="error">
                <AddShoppingCartIcon />
              </Badge>
            </Link>
            <IconButton sx={{ color: "black" }}>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton sx={{ color: "black" }}>
              <Button onClick={<Sidebar />}>
                <WorkOutlineIcon />
              </Button>
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ color: "black" }}>
                <PersonOutlineIcon />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>

            <Link to="/">
              {user.email ? user.email : <span>Не зашел</span>}
            </Link>
            <Button onClick={handleLogOut} sx={{ color: "black" }}>
              LogOut
            </Button>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"></IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
              <Link to="/auth">
                <AccountCircle />
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
