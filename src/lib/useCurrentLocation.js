import { useEffect, useState } from "react";

export const useCurrentLocation = () => {
  const defaultLat = 35;
  const defaultLon = 127;

  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defaultLon);

  const location = (pos) => {
    const {
      coords: { latitude, longitude },
    } = pos;

    setLat(latitude);
    setLon(longitude);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(location);
    }
    // => 현재 위치 기반으로 위도, 경도값을 가져올 수 있음
  }, [lat, lon]);

  return {
    lat,
    lon,
  };
};
