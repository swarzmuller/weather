import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimationContextProps, AnimationTypes } from "./types";

export const AnimationContext = createContext<AnimationContextProps>({
  direction: "",
  setDirection: () => {
    /* no-op */
  },
});

export const AnimationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { pathname } = useLocation();
  const currentAnimation = pathname === "/main" ? "backward" : "forward";
  const [direction, setDirection] = useState<AnimationTypes>(currentAnimation);

  return (
    <AnimationContext.Provider value={{ direction, setDirection }}>
      {children}
    </AnimationContext.Provider>
  );
};
