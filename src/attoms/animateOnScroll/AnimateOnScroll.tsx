"use client";
import { motion, useAnimation } from "framer-motion";
import { FC, ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";
// to do implement nice animation on small screensimport { useMediaQuery } from "@mui/material";
interface AnimateOnScrollProps {
  children: ReactNode;
  duration?: number;
  x?: number;
  y?: number;
  delay?: number;
  wavey?: number[];
  opacity?: boolean;
  marginViewPort?: string;
  className?: string;
}

export const AnimateOnScroll: FC<AnimateOnScrollProps> = ({
  children,
  x,
  y,
  duration,
  delay,
  className,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={className}
      initial={{ x: x ?? 50, y: y ?? 0 }}
      whileInView={{ y: 0, x: 0 }}
      transition={{
        duration: duration ?? 0.4,
        ease: "easeInOut",
        delay: delay ? delay + 0.6 : 0.6,
      }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: delay ?? 0.05,
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export const AnimateText: FC<AnimateOnScrollProps> = ({
  children,
  x,
  y,
  duration,
  delay,
  marginViewPort,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial={{ opacity: 0, x: x ?? 100, y: y ?? 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        duration: duration ?? 0.4,
        ease: "easeInOut",
        delay: delay ?? 0,
      }}
      viewport={{ once: true, margin: marginViewPort ?? "0px" }}
    >
      {children}
    </motion.div>
  );
};
