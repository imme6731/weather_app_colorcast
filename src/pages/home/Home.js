import { useEffect, useState } from "react";
import {
  after1day,
  after2day,
  base_date,
  getMidSky,
  getMidWeather,
  getUltraWeather,
  getWeather,
  reverseGeo,
} from "../../api";
import sunIcon from "../../assets/img/sun_2.png";
import cloudsIcon from "../../assets/img/clouds.png";
import darkcloudsIcon from "../../assets/img/darkcloud.png";
import rainIcon from "../../assets/img/raindrop.png";
import snowIcon from "../../assets/img/snow_1.png";
import { useCurrentLocation } from "../../lib/useCurrentLocation";
import { dfs_xy_conv } from "../../lib/grid";
import { Wrap } from "./style/MainStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughSquint } from "@fortawesome/free-regular-svg-icons";
import { Section2 } from "./components/Section2";
import { Main } from "./components/Main";
import { Section3 } from "./components/Section3";
import {
  Section01,
  Air,
  Icon,
  TxtBox,
  Wind,
  Direction,
  Speed,
} from "./style/Section01Styled";

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
  const [vec, setVec] = useState();
  const [wsd, setWsd] = useState();
  const [mid, setMid] = useState();
  const [mSky, setMSky] = useState();
  const [after1sky, setAfter1sky] = useState();
  const [after1pty, setAfter1pty] = useState();
  const [after2sky, setAfter2sky] = useState();
  const [after2pty, setAfter2pty] = useState();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(false);

        const { documents } = await reverseGeo(lat, lon);
        setGeo(documents[0]);

        // 역지오코딩

        const { response: today } = await getUltraWeather(rs.x, rs.y);
        const todaySky = today?.body?.items?.item
          .filter((x) => x.category === "SKY")
          .map((x) => x);
        setSky(todaySky);
        const todayPTY = today?.body?.items?.item
          .filter((x) => x.category === "PTY")
          .map((x) => x);
        setRain(todayPTY);
        const todayT1H = today?.body?.items?.item
          .filter((x) => x.category === "T1H")
          .map((x) => x);
        setTem(todayT1H);
        const todayVEC = today?.body?.items?.item
          .filter((x) => x.category === "VEC")
          .map((x) => x);
        setVec(todayVEC?.[0]?.fcstValue);
        const todayWSD = today?.body?.items?.item
          .filter((x) => x.category === "WSD")
          .map((x) => x);
        setWsd(todayWSD?.[0].fcstValue);
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
        const after1daySky = short?.body?.items?.item
          .filter(
            (x) =>
              x.category === "SKY" &&
              x.fcstDate === after1day &&
              x.fcstTime === "1300"
          )
          .map((x) => x.fcstValue);
        const after1dayPty = short?.body?.items?.item
          .filter(
            (x) =>
              x.category === "PTY" &&
              x.fcstDate === after1day &&
              x.fcstTime === "1300"
          )
          .map((x) => x.fcstValue);
        const after2daySky = short?.body?.items?.item
          .filter((x) => x.category === "SKY" && x.fcstDate === after2day)
          .map((x) => x.fcstValue);
        const after2dayPty = short?.body?.items?.item
          .filter((x) => x.category === "PTY" && x.fcstDate === after2day)
          .map((x) => x.fcstValue);

        setAfter1sky(after1daySky?.[0]);
        setAfter1pty(after1dayPty?.[0]);
        setAfter2sky(after2daySky?.[0]);
        setAfter2pty(after2dayPty?.[0]);

        // 단기예보

        const { response: midweather } = await getMidWeather();
        setMid(midweather?.body?.items?.item?.[0]);

        const { response: midSky } = await getMidSky();
        setMSky(midSky?.body?.items?.item?.[0]);
      } catch (error) {
        console.log("error : " + error);
      }
    })();
  }, [lat, lon, rs.x, rs.y]);

  const timeMap = sky?.map((x) => x?.fcstTime.slice(0, 2));
  const skyMap = sky?.map((x) => x?.fcstValue);
  const rainMap = rain?.map((x) => x?.fcstValue);
  const nowSky = sky?.[0]?.fcstValue;
  const nowRain = rain?.[0]?.fcstValue;

  const skyVal = (rainRes, skyRes) => {
    if (rainRes === "0") {
      if (skyRes === "1") {
        return "맑음";
      } else if (skyRes === "3") {
        return "구름 많음";
      } else if (skyRes === "4") {
        return "흐림";
      }
    } else if (rainRes !== "0") {
      if (
        rainRes === "1" ||
        rainRes === "2" ||
        rainRes === "5" ||
        rainRes === "6"
      ) {
        return "비";
      } else if (rainRes === "3" || rainRes === "7") {
        return "눈";
      }
    }
  };

  const skyIconVal = (rainRes, skyRes) => {
    if (rainRes === "0") {
      if (skyRes === "1") {
        return sunIcon;
      } else if (skyRes === "3") {
        return cloudsIcon;
      } else if (skyRes === "4") {
        return darkcloudsIcon;
      }
    } else if (rainRes !== "0") {
      if (
        rainRes === "1" ||
        rainRes === "2" ||
        rainRes === "5" ||
        rainRes === "6"
      ) {
        return rainIcon;
      } else if (rainRes === "3" || rainRes === "7") {
        return snowIcon;
      }
    }
  };

  const vecVal = () => {
    if (vec === 0 || vec === 360) {
      return "북";
    } else if (vec > 0 && vec < 90) {
      return "북동";
    } else if (vec === 90) {
      return "동";
    } else if (vec > 90 && vec < 180) {
      return "남동";
    } else if (vec === 180) {
      return "남";
    } else if (vec > 180 && vec < 269) {
      return "남서";
    } else if (vec === 270) {
      return "서";
    } else if (vec > 270 && vec < 359) {
      return "북서";
    }
  };

  const tmxVal = tmx
    ?.filter((x) => x.fcstDate === base_date)
    .map((x) => Math.round(x.fcstValue));

  const tmnVal = tmn
    ?.filter((x) => x.fcstDate === base_date)
    .map((x) => Math.round(x.fcstValue));

  const midIcon = (mm) => {
    if (mm === "맑음") {
      return sunIcon;
    } else if (mm === "구름많음") {
      return cloudsIcon;
    } else if (mm === "흐림") {
      return darkcloudsIcon;
    } else if (mm?.includes("비")) {
      return rainIcon;
    } else if (mm?.includes("눈")) {
      return snowIcon;
    }
  };

  return (
    <>
      {isLoading ? (
        "...loading"
      ) : (
        <>
          {getUltraWeather && (
            <Wrap>
              <Main
                gg={geo}
                sV={skyVal}
                nR={nowRain}
                nS={nowSky}
                siv={skyIconVal}
                tt={tem}
                tX={tmxVal}
                tN={tmnVal}
              />
              <Section01>
                <Air>
                  <Icon>
                    <FontAwesomeIcon icon={faFaceLaughSquint} />
                  </Icon>
                  <TxtBox>
                    <p>미세먼지</p>
                    <h3>좋음</h3>
                  </TxtBox>
                </Air>
                <Wind>
                  <Direction>
                    <p>풍향</p>
                    <h3>{vecVal()}</h3>
                  </Direction>
                  <Speed>
                    <p>풍속</p>
                    <h3>
                      {wsd}
                      <span>m/s</span>
                    </h3>
                  </Speed>
                </Wind>
              </Section01>

              <Section2
                tM={timeMap}
                siv={skyIconVal}
                rM={rainMap}
                sM={skyMap}
                tt={tem}
              />

              <Section3
                mI={midIcon}
                mS={mSky}
                mm={mid}
                mx={tmx}
                mn={tmn}
                siv={skyIconVal}
                a1p={after1pty}
                a1s={after1sky}
                a2p={after2pty}
                a2s={after2sky}
              />
            </Wrap>
          )}
        </>
      )}
    </>
  );
};
