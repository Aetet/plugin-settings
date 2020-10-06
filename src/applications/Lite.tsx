import React from "react";
import { Panels } from "../components/Panels";
import { PluginItem } from "../components/PluginItem";
interface ILiteProps {
  plugins: string[];
}

function processItemsAtStatelessServiceWithSuperDepsOrAtFunction(
  plugins: string[]
) {
  const items = plugins.filter((item) => item === "Audio");

  return items;
}

export const Lite: React.FC<ILiteProps> = function Lite({ plugins }) {
  const items = processItemsAtStatelessServiceWithSuperDepsOrAtFunction(
    plugins
  );
  const panelItems = items.map((item) => <PluginItem item={item} />);
  return <Panels topPanel={<>{panelItems}</>} />;
};
