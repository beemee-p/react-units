import BarGraph from "components/common/graph/BarGraph";
import BarGraphItem from "components/common/graph/BarGraphItem";
import { ReactElement } from "react";
import styled from "styled-components";

enum POINT_TYPE {
  PEDOMETER = "pedometer",
  WEEKLY_MISSION = "weeklymission",
  CASH_BACK = "cashback",
  ETC = "etc",
}

export interface UserPoint {
  title: string;
  type: POINT_TYPE;
  cost: number;
}

const data: UserPoint[] = [
  {
    title: "만보기",
    type: POINT_TYPE.PEDOMETER,
    cost: 7000,
  },
  {
    title: "이번 주 미션",
    type: POINT_TYPE.WEEKLY_MISSION,
    cost: 2050,
  },
  {
    title: "캐시백 이벤트",
    type: POINT_TYPE.CASH_BACK,
    cost: 2000,
  },
  {
    title: "기타",
    type: POINT_TYPE.ETC,
    cost: 4065,
  },
];

const UserPointGraph = (): ReactElement => {
  const userPointList: UserPoint[] = data;
  const costArr = userPointList.map((point) => point.cost);
  const barGraphColor = ["red", "blue", "yellow", "lightgray"];

  return (
    <MainGraph>
      <BarGraph values={costArr} colors={barGraphColor} height="40px" />

      <ul className="point-list">
        {userPointList.map((point, idx) => (
          <BarGraphItem
            title={point.title}
            value={point.cost.toLocaleString() + "원"}
            color={barGraphColor[idx]}
          />
        ))}
      </ul>
    </MainGraph>
  );
};

const MainGraph = styled.main`
  .point-list {
    margin: 0;
    padding: 0;
  }
`;

export default UserPointGraph;
