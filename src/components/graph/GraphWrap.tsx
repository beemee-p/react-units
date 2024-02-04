import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { GRAPH_TYPE } from "utils/Constants";
import UserCostGraph from "./UserCostGraph";
import UserPointGraph from "./UserPointGraph";

const GraphWrap = (): ReactElement => {
  const { id } = useParams<string>();

  switch (id) {
    case GRAPH_TYPE.STICK:
      return <UserCostGraph />;
    case GRAPH_TYPE.BAR:
      return <UserPointGraph />;
    default:
      return <></>;
  }
};

export default GraphWrap;
