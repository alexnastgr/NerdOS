import { useEffect, useState } from "react";
import { formatedTime } from "@/helpers/formator";

const useTime = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const localTime = formatedTime(time);

  return { localTime };
};

export default useTime;
