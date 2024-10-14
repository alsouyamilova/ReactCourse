import { useState, useEffect } from "react";

export const Timer = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{now.toLocaleString()}</div>;
};
