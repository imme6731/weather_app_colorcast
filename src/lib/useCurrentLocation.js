import { useEffect, useState } from "react";

export const useCurrentLocation = () => {
  const defaultLon = 129.1056158;
  const defaultLat = 35.1773623;
  const [lat, setLat] = useState(defaultLon);
  const [lon, setLon] = useState(defaultLat);

  const location = (pos) => {
    const {
      coords: { latitude, longitude },
    } = pos;

    setLat(latitude);
    setLon(longitude);

    // console.log(latitude, longitude);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
    // => 현재 위치 기반으로 위도, 경도값을 가져올 수 있음
  }, [lat, lon]);

  return {
    lat,
    lon,
  };
};
