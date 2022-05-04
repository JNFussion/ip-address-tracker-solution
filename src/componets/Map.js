import React, { useEffect } from "react";
import Leaflet from "leaflet";
import { useSelector } from "react-redux";
import { selectGeolocation } from "../features/ipGeolocationSlice";

function Map() {
  const geolocation = useSelector(selectGeolocation);

  useEffect(() => {
    let m;
    if (geolocation.location) {
      m = Leaflet.map("map-container").setView(
        [geolocation.location.lat, geolocation.location.lng],
        13
      );
      Leaflet.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1Ijoiam5mdXNzaW9uIiwiYSI6ImNsMnB5cmd4ajBiam0zZ3BjbWF0eHpoNTkifQ.RCZGspRFGopCmtXNDTVLbA",
        }
      ).addTo(m);
      Leaflet.marker([
        geolocation.location.lat,
        geolocation.location.lng,
      ]).addTo(m);
    }
    return () => {
      if (m) {
        m.remove();
      }
    };
  }, [geolocation]);

  return <div id="map-container" className="flex-1 h-full" />;
}

export default Map;
