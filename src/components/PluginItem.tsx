import React from "react";
import { Segment } from "@fluentui/react-northstar";

interface IPluginItemProps {
  item: JSX.Element | string;
  count?: number;
}

export const PluginItem: React.FC<IPluginItemProps> = ({ item, count }) => {
  return (
    <Segment>
      <div>{item}</div>
      {count && <div>{count}</div>}
    </Segment>
  );
};
