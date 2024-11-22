import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import { WeatherHistory, WeatherSearch } from "./components";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="/main" element={<WeatherSearch />} />
          <Route path="/list" element={<WeatherHistory />} />
        </Routes>
      </Router>
    </>
  );
};
