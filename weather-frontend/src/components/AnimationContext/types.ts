export type AnimationTypes = "forward" | "backward";

export interface AnimationContextProps {
  direction: string;
  setDirection: (value: AnimationTypes) => void;
}

