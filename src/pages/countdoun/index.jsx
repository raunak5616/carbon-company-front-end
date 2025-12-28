import { useEffect, useState, useCallback } from "react";

export const useCountdown = (targetDate) => {
  // Make getTimeRemaining stable with useCallback
  const getTimeRemaining = useCallback(() => {
    const total = new Date(targetDate) - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

    return { total, hours, minutes, seconds };
  }, [targetDate]); // depends on targetDate

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [getTimeRemaining]); // now it's safe to include

  return timeLeft;
};
