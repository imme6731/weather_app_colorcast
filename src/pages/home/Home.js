import { useEffect, useState } from "react";
import { base_date, getUltraWeather, getWeather, reverseGeo } from "../../api";
import sunIcon from "../../assets/img/sun_2.png";
import cloudsIcon from "../../assets/img/clouds.png";
import darkcloudsIcon from "../../assets/img/darkcloud.png";
import rainIcon from "../../assets/img/raindrop.png";
import snowIcon from "../../assets/img/snow_1.png";
import { useCurrentLocation } from "../../lib/useCurrentLocation";
import { dfs_xy_conv } from "../../lib/grid";
import {
  Wrap,
  Main,
  Location,
  Sky,
  SkyIcon,
  Temp,
  TempUpDown,
  UpTemp,
  DownTemp,
} from "./style/MainStyled";
import { styled } from "styled-components";

const Section01 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const Air = styled.div`
  width: 48%;
  height: 80px;
  background-color: rgba(256, 256, 256, 0.4);
  border-radius: 15px;
`;
const Wind = styled.div`
  width: 48%;
  height: 80px;
  background-color: rgba(256, 256, 256, 0.4);
  border-radius: 15px;
`;

const Section02 = styled.div`
  width: 100%;
  height: 140px;
  background-color: rgba(256, 256, 256, 0.4);
  border-radius: 15px;
  margin-bottom: 30px;
`;
const Section03 = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgba(256, 256, 256, 0.4);
  border-radius: 15px;
`;

export const Home = () => {
  const { lat, lon } = useCurrentLocation();
  const rs = dfs_xy_conv("toXY", lat, lon);

  const [isLoading, setIsLoading] = useState(true);
  const [geo, setGeo] = useState();
  const [sky, setSky] = useState();
  const [rain, setRain] = useState();
  const [tem, setTem] = useState();
  const [tmx, setTmx] = useState();
  const [tmn, setTmn] = useState();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(false);

        const regeo = await reverseGeo(lat, lon);
        setGeo(regeo);
        // 역지오코딩

        const { response: today } = await getUltraWeather(rs.x, rs.y);
        const todaySky = today?.body?.items?.item
          .filter((x) => x.category === "SKY")
          .map((x) => x);
        setSky(todaySky[0]?.fcstValue);
        const todayPTY = today?.body?.items?.item
          .filter((x) => x.category === "PTY")
          .map((x) => x);
        setRain(todayPTY[0]?.fcstValue);
        const todayT1H = today?.body?.items?.item
          .filter((x) => x.category === "T1H")
          .map((x) => x);
        setTem(todayT1H[0]?.fcstValue);
        // 초단기예보

        const { response: short } = await getWeather(rs.x, rs.y);
        const todayTMX = short?.body?.items?.item
          .filter((x) => x.category === "TMX")
          .map((x) => x);
        setTmx(todayTMX);
        const todayTMN = short?.body?.items?.item
          .filter((x) => x.category === "TMN")
          .map((x) => x);
        setTmn(todayTMN);
        // 단기예보
      } catch (error) {
        console.log("error : " + error);
      }
    })();
  }, [lat, lon, rs.x, rs.y]);

  const skyVal = () => {
    if (rain === "0") {
      if (sky === "1") {
        return "맑음";
      } else if (sky === "3") {
        return "구름 많음";
      } else if (sky === "4") {
        return "흐림";
      }
    } else if (rain !== "0") {
      if (rain === "1" || rain === "2" || rain === "5" || rain === "6") {
        return "비";
      } else if (rain === "3" || rain === "7") {
        return "눈";
      }
    }
  };

  const skyIconVal = () => {
    if (rain === "0") {
      if (sky === "1") {
        return sunIcon;
      } else if (sky === "3") {
        return cloudsIcon;
      } else if (sky === "4") {
        return darkcloudsIcon;
      }
    } else if (rain !== "0") {
      if (rain === "1" || rain === "2" || rain === "5" || rain === "6") {
        return rainIcon;
      } else if (rain === "3" || rain === "7") {
        return snowIcon;
      }
    }
  };

  const tmxVal = tmx
    ?.filter((x) => x.fcstDate === base_date)
    .map((x) => Math.round(x.fcstValue));

  const tmnVal = tmn
    ?.filter((x) => x.fcstDate === base_date)
    .map((x) => Math.round(x.fcstValue));

  return (
    <>
      {isLoading ? (
        "...loading"
      ) : (
        <>
          {getUltraWeather && (
            <Wrap>
              <Main>
                {geo && (
                  <Location>
                    {geo.city} {geo.locality}
                  </Location>
                )}
                <Sky>{skyVal()}</Sky>
                <SkyIcon src={skyIconVal()}></SkyIcon>
                <Temp>{tem}°</Temp>
                <TempUpDown>
                  <UpTemp>최고 : {tmxVal}°</UpTemp>
                  <DownTemp>최저 : {tmnVal}°</DownTemp>
                </TempUpDown>
              </Main>

              <Section01>
                <Air></Air>
                <Wind></Wind>
              </Section01>

              <Section02></Section02>

              <Section03></Section03>
            </Wrap>
          )}
        </>
      )}
    </>
  );
};
