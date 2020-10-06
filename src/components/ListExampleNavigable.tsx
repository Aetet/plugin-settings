import React from "react";
import { List, ListItemProps } from "@fluentui/react-northstar";

export const ListExampleNavigable = ({ items }: { items: ListItemProps[] }) => (
  <List navigable items={items} />
);
