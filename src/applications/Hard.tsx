import React from "react";
import { Panels } from "../components/Panels";
import { PluginItem } from "../components/PluginItem";
import { Dialog, Button } from "@fluentui/react-northstar";
import { Presentation } from "../components/Presentation";
import { items } from "../components/items";
interface ILiteProps {
  plugins: string[];
}

function notFilterAtAll(plugins: string[]) {
  return plugins;
}

export const Hard: React.FC<ILiteProps> = function Lite({ plugins }) {
  const notFilteredPlugins = notFilterAtAll(plugins);
  const panelItems = notFilteredPlugins.map((item, index) => (
    <PluginItem
      item={
        item === "Presentation" ? (
          <Dialog
            design={{
              width: "99%",
              height: "99%",
            }}
            confirmButton="Hello"
            content={<Presentation items={items} />}
            trigger={<Button content="Presentations" />}
          />
        ) : (
          item
        )
      }
      count={index === 1 ? index : undefined}
    />
  ));
  return <Panels topPanel={<>{panelItems}</>} items={items} />;
};
