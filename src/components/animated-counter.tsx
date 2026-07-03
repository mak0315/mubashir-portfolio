"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

/**
 * Animates numeric portions of a display string (e.g. "Rs 143,000" or "6")
 * up from zero when scrolled into view. Non-numeric strings render as-is.
 */
export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const numericMatch = value.replace(/[^0-9.]/g, "");
  const numeric = numericMatch ? parseFloat(numericMatch) : null;
  const prefix = numeric !== null ? value.split(numericMatch)[0] : "";
  const suffix = numeric !== null ? value.split(numericMatch)[1] : "";

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 24, stiffness: 90 });
  const [display, setDisplay] = React.useState("0");

  React.useEffect(() => {
    if (isInView && numeric !== null) {
      motionValue.set(numeric);
    }
  }, [isInView, numeric, motionValue]);

  React.useEffect(() => {
    const unsub = springValue.on("change", (latest) => {
      setDisplay(Math.round(latest).toLocaleString("en-US"));
    });
    return unsub;
  }, [springValue]);

  if (numeric === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
