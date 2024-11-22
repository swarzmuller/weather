import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { WeatherList } from "./components/WeatherList"
import { WeatherForm } from "./components/WeatherForm"

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<WeatherForm />} />
        <Route path="/list" element={<WeatherList />} />
      </Routes>
    </Router>
  )
}


