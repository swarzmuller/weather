import { BrowserRouter as Router } from "react-router-dom";
import { AnimationProvider, PageTransitionWrapper } from "@/components";
import { GlobalStyles } from "./globalStyles";

export const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <AnimationProvider>
        <PageTransitionWrapper />
      </AnimationProvider>
    </Router>
  );
};
