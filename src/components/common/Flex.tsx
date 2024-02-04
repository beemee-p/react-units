import { HTMLAttributes, ReactElement } from "react";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  width: string;
  flexDirection?: "row" | "column";
  alignItems?: "flex-start" | "flex-end" | "center";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

const Flex = ({
  flexDirection = "row",
  alignItems = "flex-start",
  justifyContent = "flex-start",
  ...props
}: FlexProps): ReactElement => {
  const flexStyle = {
    display: "flex",
    flexDirection,
    alignItems,
    justifyContent,
    ...props,
  };

  return <div style={flexStyle}>{props.children}</div>;
};

export default Flex;
