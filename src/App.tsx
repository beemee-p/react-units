import { ReactElement } from "react";
import { Link } from "react-router-dom";

const App = (): ReactElement => {
  return (
    <div className="App">
      <Link to="/graph/1">막대그래프</Link>
    </div>
  );
};

export default App;
