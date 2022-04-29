import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import Done from "@mui/icons-material/DoneOutline";
import Cancel from "@mui/icons-material/CancelOutlined";
import Video from "@mui/icons-material/VideoLibrary";
import Sumarize from "@mui/icons-material/Summarize";
import Users from "@mui/icons-material/SupervisedUserCircle";
import {
  ListItemText,
  ListItem,
  IconButton,
  Typography,
  Toolbar,
  CssBaseline,
  Drawer,
  Box,
} from "@mui/material";
import MaterialDidactico from "./components/MaterialDidactico";
import Aciertos from "./components/Aciertos";
import Errores from "./components/Errores";
import UsoDidactico from "./components/UsoDidactico";
import Conclusion from "./components/Conclusion";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(1);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div">
            Imperio Mexica
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem onClick={() => setShow(1)} button key={1}>
            <ListItemIcon>
              <Video />
            </ListItemIcon>
            <ListItemText primary={"Material Didactico"} />
          </ListItem>
          <ListItem onClick={() => setShow(2)} button key={2}>
            <ListItemIcon>
              <Cancel />
            </ListItemIcon>
            <ListItemText primary={"Errores"} />
          </ListItem>
          <ListItem onClick={() => setShow(3)} button key={3}>
            <ListItemIcon>
              <Done />
            </ListItemIcon>
            <ListItemText primary={"Aciertos"} />
          </ListItem>
          <ListItem onClick={() => setShow(4)} button key={4}>
            <ListItemIcon>
              <Users />
            </ListItemIcon>
            <ListItemText primary={"Uso didactico"} />
          </ListItem>
          <ListItem onClick={() => setShow(5)} button key={5}>
            <ListItemIcon>
              <Sumarize />
            </ListItemIcon>
            <ListItemText primary={"Conclusión"} />
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {show === 1 && <MaterialDidactico />}
        {show === 2 && <Errores />}
        {show === 3 && <Aciertos />}
        {show === 4 && <UsoDidactico />}
        {show === 5 && <Conclusion />}
      </Main>
    </Box>
  );
}
