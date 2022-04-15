import React from "react";
import { ListItemButton, ListItemIcon } from "@mui/material";

export default function SidebarItem(props) {
  return (
    <ListItemButton>
      <ListItemIcon>{props.children}</ListItemIcon>
    </ListItemButton>
  );
}
