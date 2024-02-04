import { ReactElement, useMemo } from "react";
import styled from "styled-components";
import { getPriceByKor } from "utils/Price";
import StickGraph from "../common/graph/StickGraph";
import { useUserCostType } from "hooks/useUserCostType";
import { COMPARED_COST } from "utils/Constants";

export interface UserCost {
  name: string;
  cost: number;
  avgCost: number;
}

const data: UserCost = {
  name: "박유나",
  cost: 13000,
  avgCost: 47000,
};

const UserCostGraph = (): ReactElement => {
  const user: UserCost = data;
  const { userCostType } = useUserCostType(user);

  const comparedCostDesc = useMemo(() => {
    if (userCostType === COMPARED_COST.WAIST) {
      const cost = getPriceByKor(user.cost - user.avgCost);
      return (
        <div>
          또래보다 <span>매달 {cost}씩 더 쓰고 있어요</span>
        </div>
      );
    }

    if (userCostType === COMPARED_COST.SAVE) {
      const cost = getPriceByKor(user.avgCost - user.cost);
      return (
        <div>
          또래보다 <span>매달 {cost}씩 덜 쓰고 있어요</span>
        </div>
      );
    }

    if (userCostType === COMPARED_COST.EQUAL) {
      return <div>또래와 같은 평균 금액으로 사용하고 있어요</div>;
    }
  }, [user.avgCost, user.cost, userCostType]);

  const comparedPercentage = useMemo(() => {
    if (userCostType === COMPARED_COST.WAIST) {
      return {
        me: "50%",
        avg: ((user.avgCost / user.cost) * 50).toString() + "%",
      };
    }

    if (userCostType === COMPARED_COST.SAVE) {
      return {
        me: ((user.cost / user.avgCost) * 100).toString() + "%",
        avg: "100%",
      };
    }

    return {
      me: "50%",
      avg: "50%",
    };
  }, [user.cost, user.avgCost, userCostType]);

  return (
    <MainGraph>
      <h1>
        {user.name}님은 {comparedCostDesc}
      </h1>

      <SectionGraph>
        <StickGraph fill={comparedPercentage.avg} height="300px" width="70px" />
        <StickGraph
          fill={comparedPercentage.me}
          width="70px"
          height="300px"
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

export default UserCostGraph;
