import React from "react";
import {
  Provider,
  teamsTheme,
  Dialog,
  Button,
  Flex,
  Segment,
  ListItemProps,
} from "@fluentui/react-northstar";
import { ListExampleNavigable } from "./ListExampleNavigable";
import { items as defaultItems } from "./items";

interface IPanelsProps {
  items?: ListItemProps[];
  topPanel: JSX.Element;
}

export const Panels: React.FC<IPanelsProps> = ({
  topPanel,
  items = defaultItems,
}) => {
  return (
    <div>
      <Provider theme={teamsTheme}>
        <div className="App">
          <header className="App-header">
            <Flex padding="padding.medium">
              <Segment content={topPanel}></Segment>
            </Flex>
            <Flex gap="gap.small" padding="padding.medium">
              <Flex.Item>
                <Segment content={<ListExampleNavigable items={items} />} />
              </Flex.Item>
            </Flex>
          </header>
        </div>
      </Provider>
    </div>
  );
};
