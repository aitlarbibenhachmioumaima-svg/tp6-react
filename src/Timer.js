import { useEffect, useState } from "react";

function Timer() {
  const [temps, setTemps] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemps((t) => t + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h4>Durée : {temps} secondes</h4>;
}

export default Timer;