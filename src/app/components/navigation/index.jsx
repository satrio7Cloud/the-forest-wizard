"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";

const container = {
  hidden: { opcaity: 0 },
  show: {
    opcaity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="w-max flex items-center justify-center relative hover:pause animate-spin-slow text-blue-50 group"
            >
              {BtnList.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = isLarge
                  ? "calc(22vw - 1rem)"
                  : isMedium
                  ? "calc(32vw - 1rem)"
                  : "calc(42vw - 1rem)";
                const x = `calc(${radius}* ${Math.cos(angleRad)})`;
                const y = `calc(${radius}* ${Math.sin(angleRad)})`;

                console.log(angleRad, radius, index, x, y);

                return <NavButton key={btn.label} x={x} y={y} {...btn} />;
              })}
            </motion.div>
          ) : (
            <>
              {/* <div className="w-max flex items-center justify-center relative hover:pause animate-spin-slow text-blue-50 group"> */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className=" w-full px-2.5 xs:p-0 xs:w-max flex flex-col items-start space-y-4 xs:items-center justify-center relative group text-blue-50 "
              >
                {BtnList.slice(0, BtnList.length / 2, BtnList.length).map(
                  (btn, index) => {
                    // console.log(angleRad, radius, index, x, y);

                    return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                  }
                )}
              </motion.div>

              {/* <div className="w-max flex items-center justify-center relative hover:pause animate-spin-slow text-blue-50 group"> */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className=" w-full px-2.5 xs:p-0 xs:w-max flex flex-col items-end space-y-4 xs:items-center justify-center relative group text-blue-50 "
              >
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn, index) => {
                    // console.log(angleRad, radius, index, x, y);

                    return (
                      <NavButton
                        key={btn.label}
                        x={0}
                        y={0}
                        {...btn}
                        labelDirection="left"
                      />
                    );
                  }
                )}
              </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
