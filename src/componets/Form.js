import React from "react";
import IconArrow from "../assets/images/icon-arrow.svg";

function Form() {
  return (
    <form action="" className="max-w-md mx-auto">
      <div className="flex">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          required
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
