import { motion } from "framer-motion";
import { MotionDivProps } from "../types";

export const MotionDiv = ({ children, direction }: MotionDivProps) => {
  return (
    <motion.div
      initial={{ x: direction === "forward" ? "100%" : "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: direction === "forward" ? "100%" : "-100%" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
