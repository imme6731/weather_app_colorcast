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

export const Main = ({ gg, sV, nR, nS, siv, tt, tX, tN }) => {
  return (
    <SMain>
      {gg && <Location>{gg.address_name}</Location>}
      <Sky>{sV(nR, nS)}</Sky>
      <SkyIcon src={siv(nR, nS)} />
      <Temp>{tt?.[0]?.fcstValue}°</Temp>
      <TempUpDown>
        <UpTemp>최고 : {tX}°</UpTemp>
        <DownTemp>최저 : {tN}°</DownTemp>
      </TempUpDown>
    </SMain>
  );
};
