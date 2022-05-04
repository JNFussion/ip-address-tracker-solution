import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGeolocation,
  selectGeolocation,
  selectIP,
} from "../features/ipGeolocationSlice";

function Location() {
  const ip = useSelector(selectIP);
  const geolocation = useSelector(selectGeolocation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGeolocation(ip));
    return () => {};
  }, [ip]);

  return (
    <ul className="md:flex py-2 gap-5 divide-x rounded-xl shadow bg-white">
      <li className="p-4">
        <h2 className="font-medium text-sm text-dark-gray">IP ADDRESS</h2>
        <p className="font-bold text-lg text-very-dark-grey">
          {geolocation.ip}
        </p>
      </li>
      <li className="p-4">
        <h2 className="font-medium text-sm text-dark-gray">LOCATION</h2>
        <p className="font-bold text-lg text-very-dark-grey">
          {geolocation.location &&
            `${geolocation.location.city}, ${geolocation.location.postalCode}`}
        </p>
      </li>
      <li className="p-4">
        <h2 className="font-medium text-sm text-dark-gray">TIMEZONE</h2>
        <p className="font-bold text-lg text-very-dark-grey">
          {geolocation.timezone}
        </p>
      </li>
      <li className="p-4">
        <h2 className="font-medium text-sm text-dark-gray">ISP</h2>
        <p className="font-bold text-lg text-very-dark-grey">
          {geolocation.isp}
        </p>
      </li>
    </ul>
  );
}

export default Location;
