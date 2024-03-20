"use client";
import React, { useEffect, useState } from "react";

const createFireBallFly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const FireFilesBackground = () => {
  const [firefilies, setFirefilies] = useState([]);

  useEffect(() => {
    const addFireFlyPeriodically = () => {
      const newFireFly = createFireBallFly();
      setFirefilies((currentFireflies) => [
        ...currentFireflies.slice(-14),
        newFireFly,
      ]);
    };

    const interval = setInterval(addFireFlyPeriodically, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {firefilies.map((firefly) => {
        return (
          <div
            key={firefly.id}
            className="absolute rounded-full w-[15px] h-[15px] bg-firefly-radial"
            style={{
              top: firefly.top,
              left: firefly.left,
              animation: `move ${firefly.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FireFilesBackground;
