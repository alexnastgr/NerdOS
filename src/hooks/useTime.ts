import { useEffect, useState } from "react";
import { useSettings } from "./useSettings";

const useTime = () => {
  const { timeFormat } = useSettings(); // 12 ή 24
  const [time, setTime] = useState<Date>(new Date());

  const formatedTime = (date: Date, format: number): string => {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    if (format === 12) {
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      return `${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;
    }

    return `${String(hours).padStart(2, "0")}:${minutes}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const localTime = formatedTime(time, timeFormat);

  return { time, localTime, timeFormat };
};

export default useTime;
