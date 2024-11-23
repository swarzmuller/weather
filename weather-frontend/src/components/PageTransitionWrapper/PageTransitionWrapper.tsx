import { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AnimationContext, WeatherHistory, WeatherSearch } from "@/components";
import { MotionDiv } from "./components/MotionDiv";

export const PageTransitionWrapper = () => {
  const location = useLocation();
  const { direction } = useContext(AnimationContext);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route
          path="/main"
          element={
            <MotionDiv direction={direction}>
              <WeatherSearch />
            </MotionDiv>
          }
        />
        <Route
          path="/list"
          element={
            <MotionDiv direction={direction}>
              <WeatherHistory />
            </MotionDiv>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
