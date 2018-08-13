import React from "react";
import "./MainMenu.css";
import { Menu, MenuItem } from "@material-ui/core";

const MainMenu = ({ menuButtons, ...menuProps }) => {
  const renderMenuItems = () => {
    return menuButtons.map(({ image, action }, index) => {
      let key = "menu_button" + index;
      return (
        <MenuItem color="primary" onClick={action} key={key}>
          {" "}
          {image}{" "}
        </MenuItem>
      );
    });
  };

  return (
    <div>
      <Menu open={Boolean(menuProps.anchorEl)} {...menuProps}>
        {renderMenuItems()}
      </Menu>
    </div>
  );
};
export default MainMenu;
