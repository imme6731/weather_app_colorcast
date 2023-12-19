import { useEffect, useState } from "react";
import { useCurrentLocation } from "../../lib/useCurrentLocation";
import { dfs_xy_conv } from "../../lib/grid";
import {
  date,
  getUltraWeather,
  hour,
  month,
  reverseGeo,
  year,
} from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import {
  Wrap,
  Main,
  Location,
  Date,
  WindIcon,
  ValWrap,
  MDirection,
  MSpeed,
  Section01,
  Title,
  ConWrap,
  Con,
  Time,
  Value,
  Icon,
  Direction,
  Speed,
} from "./style/windStyle";

export const Wind = () => {
  const { lat, lon } = useCurrentLocation();
  const rs = dfs_xy_conv("toXY", lat, lon);

  const [isLoading, setIsLoading] = useState(true);
  const [geo, setGeo] = useState();
  const [vec, setVec] = useState();
  const [wsd, setWsd] = useState();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(false);

        const { documents } = await reverseGeo(lat, lon);
        setGeo(documents[0]);

        // 역지오코딩

        const { response: today } = await getUltraWeather(rs.x, rs.y);
        const todayVEC = today?.body?.items?.item
          .filter((x) => x.category === "VEC")
          .map((x) => x);
        setVec(todayVEC);

        const todayWSD = today?.body?.items?.item
          .filter((x) => x.category === "WSD")
          .map((x) => x);
        setWsd(todayWSD);
      } catch (error) {
        console.log("error : " + error);
      }
    })();
  }, [lat, lon, rs.x, rs.y]);

  const dateVal = `${year}-${month}-${date} ${hour}:00`;

  const vecVal = (vec) => {
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

  return (
    <>
      {isLoading ? (
        "...loading"
      ) : (
        <>
          {
            <Wrap>
              <Main>
                {geo && <Location>{geo.address_name}</Location>}
                <Date>{dateVal}</Date>
                <WindIcon>
                  <FontAwesomeIcon icon={faWind} />
                </WindIcon>
                <ValWrap>
                  {vec && (
                    <MDirection>{vecVal(vec?.[0]?.fcstValue)}풍</MDirection>
                  )}
                  {wsd && (
                    <MSpeed>
                      {wsd?.[0]?.fcstValue}
                      <span>m/s</span>
                    </MSpeed>
                  )}
                </ValWrap>
              </Main>

              <Section01>
                <Title>시간별 예보</Title>
                <ConWrap>
                  <Con>
                    <Time>
                      {vec?.[0]?.fcstTime.slice(0, 2) < "12"
                        ? vec.fcstTime.slice(0, 2) > "9"
                          ? `오전 ${vec?.[0]?.fcstTime.slice(0, 2)}시`
                          : vec?.[0]?.fcstTime.slice(0, 2) === "00"
                          ? `오전 12시`
                          : `오전 ${vec?.[0]?.fcstTime.slice(1, 2)}시`
                        : vec?.[0]?.fcstTime.slice(0, 2) === "12"
                        ? `오후 12시`
                        : `오후 ${vec?.[0]?.fcstTime.slice(0, 2) - 12}시`}
                    </Time>

                    <Value>
                      <Icon>
                        <FontAwesomeIcon icon={faWind} />
                      </Icon>
                      <Direction>{vecVal(vec?.[0]?.fcstValue)}풍</Direction>
                      <Speed>{wsd?.[0]?.fcstValue}m/s</Speed>
                    </Value>
                  </Con>
                  <Con>
                    <Time>
                      {vec?.[1]?.fcstTime.slice(0, 2) < "12"
                        ? vec.fcstTime.slice(0, 2) > "9"
                          ? `오전 ${vec?.[1]?.fcstTime.slice(0, 2)}시`
                          : vec?.[1]?.fcstTime.slice(0, 2) === "00"
                          ? `오전 12시`
                          : `오전 ${vec?.[1]?.fcstTime.slice(1, 2)}시`
                        : vec?.[1]?.fcstTime.slice(0, 2) === "12"
                        ? `오후 12시`
                        : `오후 ${vec?.[1]?.fcstTime.slice(0, 2) - 12}시`}
                    </Time>

                    <Value>
                      <Icon>
                        <FontAwesomeIcon icon={faWind} />
                      </Icon>
                      <Direction>{vecVal(vec?.[1]?.fcstValue)}풍</Direction>
                      <Speed>{wsd?.[1]?.fcstValue}m/s</Speed>
                    </Value>
                  </Con>
                  <Con>
                    <Time>
                      {vec?.[2]?.fcstTime.slice(0, 2) < "12"
                        ? vec.fcstTime.slice(0, 2) > "9"
                          ? `오전 ${vec?.[2]?.fcstTime.slice(0, 2)}시`
                          : vec?.[2]?.fcstTime.slice(0, 2) === "00"
                          ? `오전 12시`
                          : `오전 ${vec?.[2]?.fcstTime.slice(1, 2)}시`
                        : vec?.[2]?.fcstTime.slice(0, 2) === "12"
                        ? `오후 12시`
                        : `오후 ${vec?.[2]?.fcstTime.slice(0, 2) - 12}시`}
                    </Time>

                    <Value>
                      <Icon>
                        <FontAwesomeIcon icon={faWind} />
                      </Icon>
                      <Direction>{vecVal(vec?.[2]?.fcstValue)}풍</Direction>
                      <Speed>{wsd?.[2]?.fcstValue}m/s</Speed>
                    </Value>
                  </Con>
                  <Con>
                    <Time>
                      {vec?.[3]?.fcstTime.slice(0, 2) < "12"
                        ? vec?.[3]?.fcstTime.slice(0, 2) > "9"
                          ? `오전 ${vec?.[3]?.fcstTime.slice(0, 2)}시`
                          : vec?.[3]?.fcstTime.slice(0, 2) === "00"
                          ? `오전 12시`
                          : `오전 ${vec?.[3]?.fcstTime.slice(1, 2)}시`
                        : vec?.[3]?.fcstTime.slice(0, 2) === "12"
                        ? `오후 12시`
                        : `오후 ${vec?.[3]?.fcstTime.slice(0, 2) - 12}시`}
                    </Time>

                    <Value>
                      <Icon>
                        <FontAwesomeIcon icon={faWind} />
                      </Icon>
                      <Direction>{vecVal(vec?.[3]?.fcstValue)}풍</Direction>
                      <Speed>{wsd?.[3]?.fcstValue}m/s</Speed>
                    </Value>
                  </Con>
                  <Con>
                    <Time>
                      {vec?.[4]?.fcstTime.slice(0, 2) < "12"
                        ? vec?.[4]?.fcstTime.slice(0, 2) > "9"
                          ? `오전 ${vec?.[4]?.fcstTime.slice(0, 2)}시`
                          : vec?.[4]?.fcstTime.slice(0, 2) === "00"
                          ? `오전 12시`
                          : `오전 ${vec?.[4]?.fcstTime.slice(1, 2)}시`
                        : vec?.[4]?.fcstTime.slice(0, 2) === "12"
                        ? `오후 12시`
                        : `오후 ${vec?.[4]?.fcstTime.slice(0, 2) - 12}시`}
                    </Time>

                    <Value>
                      <Icon>
                        <FontAwesomeIcon icon={faWind} />
                      </Icon>
                      <Direction>{vecVal(vec?.[4]?.fcstValue)}풍</Direction>
                      <Speed>{wsd?.[4]?.fcstValue}m/s</Speed>
                    </Value>
                  </Con>
                  <Con>
                    <Time>
                      {vec?.[5]?.fcstTime.slice(0, 2) < "12"
                        ? vec?.[5]?.fcstTime.slice(0, 2) > "9"
                          ? `오전 ${vec?.[5]?.fcstTime.slice(0, 2)}시`
                          : vec?.[5]?.fcstTime.slice(0, 2) === "00"
                          ? `오전 12시`
                          : `오전 ${vec?.[5]?.fcstTime.slice(1, 2)}시`
                        : vec?.[5]?.fcstTime.slice(0, 2) === "12"
                        ? `오후 12시`
                        : `오후 ${vec?.[5]?.fcstTime.slice(0, 2) - 12}시`}
                    </Time>

                    <Value>
                      <Icon>
                        <FontAwesomeIcon icon={faWind} />
                      </Icon>
                      <Direction>{vecVal(vec?.[5]?.fcstValue)}풍</Direction>
                      <Speed>{wsd?.[5]?.fcstValue}m/s</Speed>
                    </Value>
                  </Con>
                </ConWrap>
              </Section01>
            </Wrap>
          }
        </>
      )}
    </>
  );
};
