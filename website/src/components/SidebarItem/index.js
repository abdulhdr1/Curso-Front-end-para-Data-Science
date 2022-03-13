import React from "react";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { FilterAlt } from "@mui/icons-material";

export default function SidebarItem(props) {
  return (
    <ListItemButton>
      <ListItemIcon>{props.children}</ListItemIcon>
    </ListItemButton>
  );
}
