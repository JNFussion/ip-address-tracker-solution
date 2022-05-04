import React, { useState } from "react";
import { useDispatch } from "react-redux";
import IconArrow from "../assets/images/icon-arrow.svg";
import { setIP } from "../features/ipGeolocationSlice";

function Form() {
  const [inputIP, setInputIP] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setIP(inputIP));
    setInputIP("");
  }

  return (
    <form action="" className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          required
          value={inputIP}
          onChange={(e) => setInputIP(e.target.value)}
          className="w-full px-3 py-2 rounded-l-xl"
        />
        <button type="submit" className="px-4 rounded-r-xl bg-black">
          <img src={IconArrow} alt="icon arrow" />
        </button>
      </div>
    </form>
  );
}

export default Form;
