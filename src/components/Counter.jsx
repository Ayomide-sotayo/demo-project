/* eslint-disable no-const-assign */
import { useState } from "react";
function Counter() {
  const [count, setcount] = useState(0);
  return (
    <>
      <section className="w-full bg-amber-500 px-20 py-10 flex justify-between">
        <button
          className="bg-black text-white text-2xl px-10 py-5"
          onClick={() => setcount(count - 1)}
        >
          -
        </button>
        <p className="Text-4xl capitalize font-bold">
          you clicked {count} times
        </p>
        <button
          className="bg-black text-white text-2xl px-10 py-5"
          onClick={() => setcount(count + 1)}
        >
          +
        </button>
      </section>
      <section className="w-full bg-amber-500 px-20 py-10 flex justify-between">
        <button
          className="bg-black text-white text-2xl px-10 py-5"
          onClick={() => setcount(count - 1)}
        >
          -
        </button>
        <p className="Text-4xl capitalize font-bold">
          you clicked {count} times
        </p>
        <button
          className="bg-black text-white text-2xl px-10 py-5"
          onClick={() => setcount(count + 1)}
        >
          +
        </button>
      </section>
    </>
  );
}
export default Counter;
