import { ReactElement } from "react";
import styled from "styled-components";
import Label from "../Label";
import Flex from "../Flex";

interface BarGraphItemProps {
  title: string;
  value: string;
  color: string;
}

const BarGraphItem = (props: BarGraphItemProps): ReactElement => {
  return (
    <LiBarGraphItem>
      <Flex justifyContent="space-between" width="100%">
        <p>
          <Label type="square" color={props.color} />
          <span className="bar-item-title">{props.title}</span>
        </p>
        <p>{props.value}</p>
      </Flex>
    </LiBarGraphItem>
  );
};

const LiBarGraphItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;

  .bar-item-title {
    margin-left: 4px;
    font-weight: 500;
  }
`;

export default BarGraphItem;
