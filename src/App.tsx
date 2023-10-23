import { useEffect, useState } from "react";

const padWithZero = (value: number) => (value < 10 ? `0${value}` : value);

const useCurrentTime = () => {
  const getCurrentTime = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    return {
      seconds: padWithZero(seconds),
      hours: padWithZero(hours),
      minutes: padWithZero(minutes),
    };
  };

  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
};

function App() {
  const { seconds, hours, minutes } = useCurrentTime();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: `rgb(${hours},${minutes},${seconds})`,
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "4.5rem",
          fontWeight: "normal",
          color: "white",
        }}
      >
        #{hours}
        {minutes}
        {seconds}
      </h1>
    </div>
  );
}

export default App;
