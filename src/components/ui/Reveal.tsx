
"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

type RevealDirection = "up" | "down" | "left" | "right";

interface RevealProps
  extends Omit<HTMLMotionProps<"div">, "direction"> {
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

const offsets: Record<
  RevealDirection,
  (distance: number) => { x: number; y: number }
> = {
  up: (distance) => ({ x: 0, y: distance }),
  down: (distance) => ({ x: 0, y: -distance }),
  left: (distance) => ({ x: distance, y: 0 }),
  right: (distance) => ({ x: -distance, y: 0 }),
};

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.55,
  distance = 24,
  once = true,
  viewport,
  transition,
  initial,
  whileInView,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const reduced = shouldReduceMotion === true;

  const offset = reduced
    ? { x: 0, y: 0 }
    : offsets[direction](distance);

  const variants: Variants = {
    hidden: {
      opacity: reduced ? 1 : 0,
      ...offset,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      {...props}
      className={className}
      variants={variants}
      initial={initial ?? "hidden"}
      whileInView={whileInView ?? "visible"}
      viewport={{
        once,
        amount: 0.15,
        ...viewport,
      }}
      transition={{
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
        ...transition,
      }}
    >
      {children}
    </motion.div>
  );
}
