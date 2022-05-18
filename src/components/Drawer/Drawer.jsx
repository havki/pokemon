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
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../UI/Loading";
import { Grid } from "@mui/material";
import MediaCard from "../CardGrid/CardGrid";
import {
  filterCategories,
  pokeFetch,
  pokePush,
} from "../../store/reducers/poke.reducer";
import axios from "../../api/axios.info";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();

  const { pokesData, categories, limitReq } = useSelector(
    (state) => state.poke
  );

  const [catPokes, setCatPokes] = React.useState(null);
  const categoryData = React.useRef(null);

  const isMounted = React.useRef(false);
  const [render, setRender] = React.useState(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const fetchData = async () => {
        const data = await dispatch(pokeFetch()).unwrap();
        data.results.forEach((item) => {
          dispatch(pokePush(item.url));
        });
      };
      fetchData().catch(console.error);
    } else {
      isMounted.current = true;
      // fetchData().catch(console.error);
    }
  }, [dispatch]);

  if (pokesData.length >= limitReq) {
    dispatch(filterCategories());
  }

  const showCategory = (text) => {
    console.log(pokesData);
    let filtered = []
     pokesData.forEach((item) => {

      let mapped = item.types.map((item) => {
        if (item.type.name === text) {
          return true;
        }
        return false
        
      });
      console.log(mapped);
      if(mapped.includes(true)){
        filtered.push(item)
      }
      
    });
    console.log(filtered);
    setCatPokes(text);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <button onClick={() => setRender(!render)}> sdasdasdas</button>
      <Divider />
      <List>
        {
          <ListItem button id={null}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="All" />
          </ListItem>
        }
        {categories &&
          categories.map((text, index) => (
            <ListItem
              key={text}
              onClick={() => showCategory(text)}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text.toUpperCase()} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
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
        {/* {
          !pokes ? <Loading /> : null
            <Grid container spacing={2}>
            {pokes.results.map((poke, index) => {
              return (
                <Grid item key={index} xs={12} sm={6} md={3} lg={2}>
                  <MediaCard   {...poke} />
                </Grid>
              );
            })}
          </Grid>
        } */}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
