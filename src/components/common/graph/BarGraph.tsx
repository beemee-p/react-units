import { ReactElement } from "react";
import styled from "styled-components";

const MINIMUM_VALUE = 1;

interface BarGraphProps {
  values: number[];
  colors?: string[];
  height: string;
}

const BarGraph = (props: BarGraphProps): ReactElement => {
  const percentageValues = [];
  const sum = props.values.reduce((acc, curr) => acc + curr, 0);

  for (let i = 0; i < props.values.length; i++) {
    const percentValue = Math.round((props.values[i] / sum) * 100);
    percentageValues[i] = percentValue > 1 ? percentValue : MINIMUM_VALUE;
  }

  return (
    <DivBarGraph>
      {percentageValues.map((value, idx) => (
        <div
          className="bar"
          style={{
            width: value + "%",
            height: props.height,
            background: props.colors?.[idx] || "lightgray",
          }}
        />
      ))}
    </DivBarGraph>
  );
};

const DivBarGraph = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 8px;

  .bar {
    margin-right: 4px;
    &:first-child {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }

    &:last-child {
      margin-right: 0;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
`;

export default BarGraph;
