import { useEffect, useState } from "react";
import { useCurrentLocation } from "../../lib/useCurrentLocation";
import { dfs_xy_conv } from "../../lib/grid";
import {
  date,
  getDust,
  getNearbyDust,
  getTmDust,
  hours,
  month,
  reverseGeo,
  year,
} from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faFaceLaughSquint,
  faFaceFrown,
  faFaceDizzy,
} from "@fortawesome/free-regular-svg-icons";
import {
  Wrap,
  Main,
  Location,
  Date,
  Icon,
  Txt,
  Section01,
  Title,
  ConWrap,
  Con,
  Name,
  Value,
} from "./style/airStyle";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";

export const Air = () => {
  const { lat, lon } = useCurrentLocation();
  const rs = dfs_xy_conv("toXY", lat, lon);

  const [isLoading, setIsLoading] = useState(true);
  const [geo, setGeo] = useState();
  const [tmRes, setTmRes] = useState();
  const [stationVal, setStationVal] = useState();
  const [pm10Rank, setPm10Rank] = useState();
  const [dustVal, setDustVal] = useState();

  const tmXVal = tmRes?.tmX;
  const tmYVal = tmRes?.tmY;

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(false);

        const { documents } = await reverseGeo(lat, lon);
        setGeo(documents?.[0]);

        // 역지오코딩

        const { response: tmVal } = await getTmDust(
          documents?.[0]?.region_3depth_name
        );
        setTmRes(tmVal?.body?.items?.[0]);

        const { response: stationRes } = await getNearbyDust(tmXVal, tmYVal);
        setStationVal(stationRes?.body?.items?.[0]?.stationName);

        const { response: dust } = await getDust(stationVal);
        setDustVal(dust?.body?.items?.[0]);
        setPm10Rank(dust?.body?.items?.[0]?.pm10Grade1h);
      } catch (error) {
        console.log("error : " + error);
      }
    })();
  }, [lat, lon, rs.x, rs.y, stationVal, tmXVal, tmYVal]);

  const dateVal = `${year}-${month}-${date} ${hours}:00`;

  const dustIcon = () => {
    if (pm10Rank === "1") {
      return faFaceLaughSquint;
    } else if (pm10Rank === "2") {
      return faFaceSmile;
    } else if (pm10Rank === "3") {
      return faFaceFrown;
    } else if (pm10Rank === "4") {
      return faFaceDizzy;
    }
  };

  const dustTxt = () => {
    if (pm10Rank === "1") {
      return "좋음";
    } else if (pm10Rank === "2") {
      return "보통";
    } else if (pm10Rank === "3") {
      return "나쁨";
    } else if (pm10Rank === "4") {
      return "매우 나쁨";
    }
  };

  const BgColorVal = () => {
    if (pm10Rank === "1") {
      document.querySelector(`#root`).style.backgroundColor =
        "rgb(119 159 240)";
    } else if (pm10Rank === "2") {
      document.querySelector(`#root`).style.backgroundColor = "#72cd85";
    } else if (pm10Rank === "3") {
      document.querySelector(`#root`).style.backgroundColor = "#ebca75";
    } else if (pm10Rank === "4") {
      document.querySelector(`#root`).style.backgroundColor = "#e18a50";
    }
  };

  return (
    <>
      <PageTitle titlename={` | Air`} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {
            <Wrap onLoad={BgColorVal()}>
              <Main>
                {geo ? <Location>{geo.address_name}</Location> : <Loading />}
                <Date>{dateVal}</Date>
                {dustIcon() ? (
                  <>
                    <Icon>
                      <FontAwesomeIcon icon={dustIcon()} />
                    </Icon>
                    <Txt>{dustTxt()}</Txt>
                  </>
                ) : (
                  <Loading />
                )}
              </Main>

              <Section01>
                <Title>대기 상태</Title>
                <ConWrap>
                  {dustVal ? (
                    <>
                      {dustVal?.khaiValue === "-" ? (
                        ""
                      ) : (
                        <Con>
                          <Name>통합대기</Name>
                          <Value>{dustVal?.khaiValue} unit</Value>
                        </Con>
                      )}
                      {dustVal?.pm10Value === "-" ? (
                        ""
                      ) : (
                        <Con>
                          <Name>미세먼지 (PM10)</Name>
                          <Value>{dustVal?.pm10Value} ㎍/㎥</Value>
                        </Con>
                      )}
                      {dustVal?.pm25Value === "-" ? (
                        ""
                      ) : (
                        <Con>
                          <Name>초미세먼지 (PM2.5)</Name>
                          <Value>{dustVal?.pm25Value} ㎍/㎥</Value>
                        </Con>
                      )}
                      {dustVal?.o3Value === "-" ? (
                        ""
                      ) : (
                        <Con>
                          <Name>오존 (O3)</Name>
                          <Value>{dustVal?.o3Value} ppm</Value>
                        </Con>
                      )}
                      {dustVal?.no2Value === "-" ? (
                        ""
                      ) : (
                        <Con>
                          <Name>이산화질소 (NO2)</Name>
                          <Value>{dustVal?.no2Value} ppm</Value>
                        </Con>
                      )}
                      {dustVal?.coValue === "-" ? (
                        ""
                      ) : (
                        <Con>
                          <Name>일산화탄소 (CO)</Name>
                          <Value>{dustVal?.coValue} ppm</Value>
                        </Con>
                      )}
                      {dustVal?.so2Value === "-" ? (
                        ""
                      ) : (
                        <Con>
                          <Name>아황산가스 (SO2)</Name>
                          <Value>{dustVal?.so2Value} ppm</Value>
                        </Con>
                      )}
                    </>
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
