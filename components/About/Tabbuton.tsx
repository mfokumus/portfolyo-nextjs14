"use client";

import { motion } from "framer-motion";
import React from "react";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

interface TabbutonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const Tabbuton = ({ active, children, selectTab }: TabbutonProps) => {
  const buttonClasses = active ? "text-white" : "text-slate-100";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold ${buttonClasses}`}>
        
        {children}

      </p>

      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-mycolor-100 mr-3"
      ></motion.div>
    </button>
  );
};

export default Tabbuton;
