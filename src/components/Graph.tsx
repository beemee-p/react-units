import { ReactElement, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { getPriceByKor } from "utils/Price";
import StickGraph from "./common/StickGraph";

enum COMPARED_COST {
  EQUAL = "Equal",
  SAVE = "Save",
  WAIST = "Waist",
}

const data = {
  name: "박유나",
  cost: 13000,
  avgCost: 47000,
};

const Graph = (): ReactElement => {
  const user = data;
  const [userCost, setUserCost] = useState<COMPARED_COST | null>(null);

  useEffect(() => {
    if (user.cost > user.avgCost) {
      setUserCost(COMPARED_COST.WAIST);
    } else if (user.cost < user.avgCost) {
      setUserCost(COMPARED_COST.SAVE);
    } else {
      setUserCost(COMPARED_COST.EQUAL);
    }
  }, [user]);

  const comparedCost = useMemo(() => {
    if (userCost === COMPARED_COST.WAIST) {
      const cost = getPriceByKor(user.cost - user.avgCost);
      return (
        <div>
          또래보다 <span>매달 {cost}씩 더 쓰고 있어요</span>
        </div>
      );
    }

    if (userCost === COMPARED_COST.SAVE) {
      const cost = getPriceByKor(user.avgCost - user.cost);
      return (
        <div>
          또래보다 <span>매달 {cost}씩 덜 쓰고 있어요</span>
        </div>
      );
    }

    if (userCost === COMPARED_COST.EQUAL) {
      return <div>또래와 같은 평균 금액으로 사용하고 있어요</div>;
    }
  }, [user.avgCost, user.cost, userCost]);

  const comparedPercentage = useMemo(() => {
    if (userCost === COMPARED_COST.WAIST) {
      return {
        me: "50%",
        avg: ((user.avgCost / user.cost) * 50).toString() + "%",
      };
    }

    if (userCost === COMPARED_COST.SAVE) {
      return {
        me: ((user.cost / user.avgCost) * 100).toString() + "%",
        avg: "100%",
      };
    }

    return {
      me: "50%",
      avg: "50%",
    };
  }, [user.cost, user.avgCost, userCost]);

  return (
    <MainGraph>
      <h1>
        {user.name}님은 {comparedCost}
      </h1>

      <SectionGraph>
        <StickGraph fill={comparedPercentage.avg} height="300px" width="70px" />
        <StickGraph
          fill={comparedPercentage.me}
          height="300px"
          width="70px"
          color="blue"
        />
      </SectionGraph>
    </MainGraph>
  );
};

const MainGraph = styled.main``;

const SectionGraph = styled.section`
  display: flex;
  justify-content: center;
  > div {
    margin-right: 20px;
  }
`;

export default Graph;
