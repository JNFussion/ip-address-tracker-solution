import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "./componets/Form";
import Location from "./componets/Location";
import Map from "./componets/Map";
import { fetchClientIP } from "./features/ipGeolocationSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClientIP());
    return () => {};
  }, []);

  return (
    <article className="max-w-[1440px] mx-auto grid grid-rows-2 md:grid-rows-4">
      <header className="relative bg-pattern">
        <h1 className="p-5 text-center text-white text-3xl">
          IP Address Tracker
        </h1>
        <Form />
        <div className="my-2 mx-auto w-fit">
          <Location />
        </div>
      </header>
      <section className="row-start-2 md:row-end-5 md:h-full flex">
        <Map />
      </section>
    </article>
  );
}

export default App;
