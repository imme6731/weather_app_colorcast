import {
  SMain,
  Location,
  Sky,
  SkyIcon,
  Temp,
  TempUpDown,
  UpTemp,
  DownTemp,
} from "../style/MainStyled";
import { Loading } from "../../../components/Loading";

export const Main = ({ gg, sV, nR, nS, siv, tt, tX, tN }) => {
  return (
    <SMain>
      {gg ? <Location>{gg.address_name}</Location> : <Loading />}

      {nR ? (
        <>
          <Sky>{sV(nR, nS)}</Sky>
          <SkyIcon src={siv(nR, nS)} />
          <Temp>{tt?.[0]?.fcstValue}°</Temp>
          {tN ? (
            <TempUpDown>
              <UpTemp>최고 : {tX}°</UpTemp>
              <DownTemp>최저 : {tN}°</DownTemp>
            </TempUpDown>
          ) : (
            <Loading />
          )}
        </>
      ) : (
        <Loading />
      )}
    </SMain>
  );
};
