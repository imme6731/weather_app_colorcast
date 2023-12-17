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
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import {
  Wrap,
  Main,
  Location,
  Date,
  Pado,
  Percent,
  Section01,
  Title,
  ConWrap,
  Con,
  Time,
  Value,
  Icon,
  Per,
} from "./style/humidStyle";

export const Humidity = () => {
  const { lat, lon } = useCurrentLocation();
  const rs = dfs_xy_conv("toXY", lat, lon);

  const [isLoading, setIsLoading] = useState(true);
  const [geo, setGeo] = useState();
  const [reh, setReh] = useState();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(false);

        const { documents } = await reverseGeo(lat, lon);
        setGeo(documents[0]);

        // 역지오코딩

        const { response: today } = await getUltraWeather(rs.x, rs.y);
        const todayREH = today?.body?.items?.item
          .filter((x) => x.category === "REH")
          .map((x) => x);
        setReh(todayREH);
        console.log(todayREH);
      } catch (error) {
        console.log("error : " + error);
      }
    })();
  }, [lat, lon, rs.x, rs.y]);

  const dateVal = `${year}-${month}-${date} ${hour}:00`;

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
                <Pado>
                  <FontAwesomeIcon icon={faDroplet} />
                </Pado>
                <Percent>
                  {reh?.[0]?.fcstValue}
                  <span>%</span>
                </Percent>
              </Main>

              <Section01>
                <Title>시간별 예보</Title>
                <ConWrap>
                  {reh &&
                    reh.map((rr) => (
                      <Con key={rr.fcstTime}>
                        <Time>
                          {rr.fcstTime.slice(0, 2) < "12"
                            ? rr.fcstTime.slice(0, 2) > "9"
                              ? `오전 ${rr.fcstTime.slice(0, 2)}시`
                              : `오전 ${rr.fcstTime.slice(1, 2)}시`
                            : `오후 ${rr.fcstTime - 12}시`}
                        </Time>

                        <Value>
                          <Icon>
                            <FontAwesomeIcon icon={faDroplet} />
                          </Icon>
                          <Per>{rr.fcstValue}%</Per>
                        </Value>
                      </Con>
                    ))}
                </ConWrap>
              </Section01>
            </Wrap>
          }
        </>
      )}
    </>
  );
};
