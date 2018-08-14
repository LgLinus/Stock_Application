import React from "react";
import "./MainMenu.css";
import { Menu, MenuItem } from "@material-ui/core";

const MainMenu = ({ children, menuButtons, ...menuProps }) => {
  return (
    <div>
      <Menu open={Boolean(menuProps.anchorEl)} {...menuProps}>
        {children}
      </Menu>
    </div>
  );
};
export default MainMenu;
