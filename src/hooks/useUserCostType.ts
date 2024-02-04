import { UserCost } from "components/graph/UserCostGraph";
import { useEffect, useState } from "react";
import { COMPARED_COST } from "utils/Constants";

export const useUserCostType = (user: UserCost) => {
  const [userCostType, setUserCostType] = useState<COMPARED_COST | null>(null);

  useEffect(() => {
    if (user.cost > user.avgCost) {
      setUserCostType(COMPARED_COST.WAIST);
    } else if (user.cost < user.avgCost) {
      setUserCostType(COMPARED_COST.SAVE);
    } else {
      setUserCostType(COMPARED_COST.EQUAL);
    }
  }, [user]);

  return { userCostType };
};
