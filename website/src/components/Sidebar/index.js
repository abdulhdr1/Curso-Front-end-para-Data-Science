import React from "react";
import { List } from "@mui/material";
import { AttachMoney, FilterAlt, Timeline } from "@mui/icons-material";
import SidebarItem from "../SidebarItem";

export default function Sidebar() {
  const itemsData = [<FilterAlt />, <AttachMoney />, <Timeline />];

  const itemsList = itemsData.map((value) => {
    return <SidebarItem>{value}</SidebarItem>;
  });

  return <List>{itemsList} </List>;
}
