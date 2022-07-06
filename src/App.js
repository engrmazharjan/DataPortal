import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PitchesScreen from "./screens/PitchesScreen/PitchesScreen";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path={"/auth"} />
          <Route path={"/add"} />
          <Route path={"/list"} element={<PitchesScreen />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
