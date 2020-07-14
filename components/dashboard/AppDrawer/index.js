import React from "react";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";

import Divider from "@material-ui/core/Divider";

import data from "../../../src/data-mock/dashboard-label";
import MenuDrawer from "./MenuDrawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

export default (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={props.open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={clsx(props.drawerHeader, classes.toolbar)}>
        <IconButton onClick={props.handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <MenuDrawer
        // handleDrawerClose={handleDrawerClose}
        classes={classes}
        // open={open}
      />
    </Drawer>
  );
};

{
  /* <List>
  {["Simular dispositivo", "Configurações"].map((text, index) => (
    <ListItem button key={text}>
      <ListItemIcon>
        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  ))}
</List>
<Divider />
<List>
  {["FAQ", "Contato"].map((text, index) => (
    <ListItem button key={text}>
      <ListItemIcon>
        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  ))}
</List> */
}
