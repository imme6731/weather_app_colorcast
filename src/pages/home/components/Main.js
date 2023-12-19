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

      {nR ? <Sky>{sV(nR, nS)}</Sky> : <Loading />}
      {nR ? <SkyIcon src={siv(nR, nS)} /> : <Loading />}
      {tt ? <Temp>{tt?.[0]?.fcstValue}°</Temp> : <Loading />}
      {tX ? (
        <TempUpDown>
          <UpTemp>최고 : {tX}°</UpTemp>
          <DownTemp>최저 : {tN}°</DownTemp>
        </TempUpDown>
      ) : (
        <Loading />
      )}
    </SMain>
  );
};
