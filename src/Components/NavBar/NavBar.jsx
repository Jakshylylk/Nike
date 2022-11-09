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
import Sidebar from "../Drawer/Drawer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { basketContext } from "../../Context/BasketContextProvider";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const location = useLocation();
  const { basketCount } = React.useContext(basketContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
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
              width: "30%",
              display: "flex",
              justifyContent: "space-around",
            }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add">Add Product</NavLink>
            {location.pathname === "/list" ? (
              <span style={{ cursor: "pointer", color: "black" }}>
                Products List
              </span>
            ) : (
              <NavLink to="/list">Products List</NavLink>
            )}
          </Box>
          <LiveSearch />
          <Sidebar />
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ color: "black" }}>
              <Link to="/basket">
                <Badge badgeContent={basketCount} color="error">
                  <AddShoppingCartIcon />
                </Badge>
              </Link>
            </IconButton>
            <IconButton sx={{ color: "black" }}>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton sx={{ color: "black" }}>
              <Button>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
