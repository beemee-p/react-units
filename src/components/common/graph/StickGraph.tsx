import { ReactElement } from "react";
import styled from "styled-components";
import { StyleProps } from "type";

interface StickGraphProps extends StyleProps {
  fill: string;
  width?: string;
  height?: string;
  color?: string;
  isAnimation?: boolean;
}

const StickGraph = (props: StickGraphProps): ReactElement => {
  return (
    <DivStickGraph className="stick-graph" {...props}>
      <div className="filled" />
    </DivStickGraph>
  );
};

const DivStickGraph = styled.div<StickGraphProps>`
  display: flex;
  flex-direction: column-reverse;
  width: ${({ width }) => (width && width) || "100%"};
  height: ${({ height }) => (height && height) || "100%"};

  .filled {
    border-radius: 8px;
    background: ${({ color }) => (color && color) || "gray"};
    height: ${({ fill }) => fill};
  }

  ${({ styles }) => styles && styles}
`;

export default StickGraph;
