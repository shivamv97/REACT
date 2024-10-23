import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleonline = () => {
      setIsOnline(true);
    };
    const handleoffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", handleonline); //junior+senior developer role
    window.addEventListener("offline", handleoffline);

    return () => {
      window.removeEventListener("online", handleonline); //senior developer role
      window.removeEventListener("offline", handleoffline);
    };
  }, []);

  return isOnline; //returns true or false
};

export default useOnline;
