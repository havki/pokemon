import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../UI/Loading";
import { Grid, Pagination, Paper } from "@mui/material";
import MediaCard from "../CardGrid/CardGrid";
import {
  filterCategories,
  pokeFetch,
  pokePush,
} from "../../store/reducers/poke.reducer";
import PokeCard from "../PokeCard/PokeCard";
import DebouncedSearch from "../DebouncedSearch/DebouncedSearch";
import Categories from "../Categories/Categories";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { pokesData, categories, limitReq } = useSelector(
    (state) => state.poke
  );

  const [catPokes, setCatPokes] = React.useState(null); //категории
  const [show, setShow] = React.useState([false, false]); //модалка
  const [pokemon, setPokemon] = React.useState(null); //пок в модалке
  const [clear,setClear ] = React.useState(false)

  const [page, setPage] = React.useState(1); // пагинация

  const isMounted = React.useRef(false);
  const filteredGlobal = React.useRef(null); // поки для категорий все и All
  const pokesPage = React.useRef(10); //поков на странице

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
    }
  }, [dispatch]);

  React.useEffect(()=>{
    showCategory('all')
  },[categories])

  React.useEffect(() => {
    if (page > 0 && filteredGlobal.current) {
      const pokesPerPage = [
        page * pokesPage.current - pokesPage.current,
        page * pokesPage.current,
      ];

      let filtered = filteredGlobal.current;
      pageSplitter(filtered, pokesPerPage);
    }
    
  }, [page]);

  if (pokesData.length >= limitReq) {
    dispatch(filterCategories());
  }

  const pageSplitter = (iterabaleArr, conditionArr) => {
    let shorted = [];
    iterabaleArr.forEach((item, index) => {
      if (index >= conditionArr[0] && index < conditionArr[1]) {
        shorted.push(item);
      }
    });
    setCatPokes(shorted);
  };

  const showCategory = (text) => {
    const pokesPerPage = [
      page * pokesPage.current - pokesPage.current,
      page * pokesPage.current,
    ];

    if (text === "all") {
      filteredGlobal.current = pokesData;
      pageSplitter(pokesData, pokesPerPage);
    } else {
      let filtered = [];
      pokesData.forEach((item) => {
        let some = item.types.some((item) => item.type.name === text);

        if (some) {
          filtered.push(item);
        }
      });
      filteredGlobal.current = filtered;

      pageSplitter(filtered, pokesPerPage);
    }

    setPage(1);
  };

  const paginHandler = (e, value) => {
    setPage(value);
  };

  const pokeShow = (pokemon, searchFrom,) => {
    setShow([true, searchFrom /* из поиска, для картинки*/]);
    pokemon && setPokemon(pokemon);
  };

  const closeModal = () =>{
    setShow([false,false])
    setClear(true)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {show[0] && (
        <PokeCard
          pokemonUrl={pokemon}
          newPictureReqProof={show}
          close={closeModal}
          
        />
      )}
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            PokemonApp
          </Typography>
          <DebouncedSearch show={pokeShow} clear={clear}/>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
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
          <Categories show={showCategory} categories={categories} />
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
          <Categories show={showCategory} categories={categories} />
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
        {catPokes ? (
          <Grid container spacing={2}>
            {catPokes.map((poke, index) => {
              return (
                <Grid item key={index} xs={12} sm={6} md={3} lg={2}>
                  <MediaCard learnMore={pokeShow} {...poke} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Loading />
        )}
      </Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
        }}
        elevation={3}
      >
        <Pagination
          defaultPage={1}
          count={(filteredGlobal.current && Math.ceil(filteredGlobal.current.length / pokesPage.current)) || 1}
          
          color="secondary"
          size="large"
          page={page}
          onChange={paginHandler}
          sx={{ margin: "20px 0 20px 100px" }}
        />
      </Paper>
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
