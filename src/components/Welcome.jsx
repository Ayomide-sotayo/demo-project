import { useState, useEffect } from 'react';

function Welcome() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // cleanup function — runs when the component unmounts
    return () => clearInterval(timer);
  }, []); // empty array = "run once, when the component first loads"

  return <p>You've been here {seconds} seconds</p>;
}
export default Welcome ;