import { useEffect, useState } from "react";
import { useCurrentLocation } from "../../lib/useCurrentLocation";
import { dfs_xy_conv } from "../../lib/grid";
import {
  date,
  getUltraWeather,
  hours,
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
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";

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
        setGeo(documents?.[0]);

        // 역지오코딩

        const { response: today } = await getUltraWeather(rs.x, rs.y);
        const todayREH = today?.body?.items?.item
          .filter((x) => x.category === "REH")
          .map((x) => x);
        setReh(todayREH);
      } catch (error) {
        console.log("error : " + error);
      }
    })();
  }, [lat, lon, rs.x, rs.y]);

  const dateVal = `${year}-${month}-${date} ${hours}:00`;

  const BgColorVal = () => {
    document.querySelector(`#root`).style.backgroundColor = "#cfb5e5";
  };

  return (
    <>
      <PageTitle titlename={` | Humidity`} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {
            <Wrap onLoad={BgColorVal()}>
              <Main>
                {geo ? <Location>{geo.address_name}</Location> : <Loading />}
                <Date>{dateVal}</Date>
                <Pado>
                  <FontAwesomeIcon icon={faDroplet} />
                </Pado>
                {reh ? (
                  <Percent>
                    {reh?.[0]?.fcstValue}
                    <span>%</span>
                  </Percent>
                ) : (
                  <Loading />
                )}
              </Main>

              <Section01>
                <Title>시간별 예보</Title>
                <ConWrap>
                  {reh ? (
                    reh.map((rr) => (
                      <Con key={rr.fcstTime}>
                        <Time>
                          {rr.fcstTime.slice(0, 2) < "12"
                            ? rr.fcstTime.slice(0, 2) > "09"
                              ? `오전 ${rr.fcstTime.slice(0, 2)}시`
                              : rr.fcstTime.slice(0, 2) === "00"
                              ? `오전 12시`
                              : `오전 ${rr.fcstTime.slice(1, 2)}시`
                            : rr.fcstTime.slice(0, 2) === "12"
                            ? `오후 12시`
                            : `오후 ${rr.fcstTime.slice(0, 2) - 12}시`}
                        </Time>

                        <Value>
                          <Icon>
                            <FontAwesomeIcon icon={faDroplet} />
                          </Icon>
                          <Per>{rr.fcstValue}%</Per>
                        </Value>
                      </Con>
                    ))
                  ) : (
                    <Loading />
                  )}
                </ConWrap>
              </Section01>
            </Wrap>
          }
        </>
      )}
    </>
  );
};
