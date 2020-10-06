import React from "react";
import { Flex, Segment, ListItemProps } from "@fluentui/react-northstar";
import { ListExampleNavigable } from "./ListExampleNavigable";

interface ILeftBarProps {
  items: ListItemProps[];
}

export const Presentation: React.FC<ILeftBarProps> = ({ items }) => {
  return (
    <Flex gap="gap.small" padding="padding.medium">
      <Flex.Item size="size.quarter">
        <Segment design={{ height: "100%" }} content="Slide menu is here" />
      </Flex.Item>

      <Flex.Item size="size.half">
        <ListExampleNavigable items={items} />
      </Flex.Item>
    </Flex>
  );
};
