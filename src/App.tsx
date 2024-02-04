import { ReactElement } from "react";
import { Link } from "react-router-dom";

const App = (): ReactElement => {
  return (
    <div className="App">
      <Link to="/graph/stick">막대그래프</Link>
      <Link to="/graph/bar">바 그래프</Link>
    </div>
  );
};

export default App;
