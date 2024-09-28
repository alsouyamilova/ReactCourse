import classes from "./ProgressBar.module.css";
import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const [y, setY] = useState(window.scrollY); // storing current scroll bar positiotn
  const [totalY, setTotalY] = useState(); // storing Total Scrollable area
  const [scrollBar, setScrollBar] = useState(); // storing Size of scroll bar

  const calculateProgress = () => {
    const y = window.scrollY;
    const pageHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    return Math.floor((y / pageHeight) * 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => setY(calculateProgress()));
    return () => {};
  }, [y]);

  return (
    <div className={classes.progressbar} style={{ width: `${y}%` }}></div> // This is our
  );
};
