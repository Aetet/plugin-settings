import React from "react";
import { Panels } from "../components/Panels";
interface IProps {
  plugins: string[];
}

function filterTwoItems(plugins: string[]) {
  const items = plugins.filter((item) => item !== "Audio");

  return items;
}

export const Medium: React.FC<IProps> = function Lite({ plugins }) {
  const items = filterTwoItems(plugins);
  const panelItems = items.map((item) => <div>Holy custom item {item}</div>);
  return <Panels topPanel={<>{panelItems}</>} />;
};
