import { styled } from "styled-components";
import { Loading } from "../../../components/Loading";

const Section03 = styled.div`
  width: 100%;
  background-color: rgba(256, 256, 256, 0.4);
  border-radius: 15px;
  padding: 0 20px;
  margin-bottom: 30px;
`;
const Title = styled.div`
  padding: 20px 0;
  border-bottom: 0.5px solid #b4b4b4;
  & h3 {
    font-size: 20px;
    color: #343434;
    font-weight: 500;
  }
`;
const ConWrap = styled.div`
  padding-bottom: 5px;
`;
const Con = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;
const Day = styled.div`
  font-size: 18px;
  color: #343434;
`;
const SIcon = styled.img`
  width: 36px;
  filter: drop-shadow(1px 1px 1px #979797);
`;
const TEMP = styled.div`
  width: 80px;
  display: flex;
  justify-content: flex-end;
`;
const Max = styled.div`
  font-size: 18px;
  color: #343434;
`;
const Min = styled.div`
  font-size: 18px;
  color: #707070;
  margin-left: 15px;
`;

export const Section3 = ({ mI, mS, mm, mx, mn, siv, a1p, a1s, a2p, a2s }) => {
  const now = new Date();
  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  const day = (n) => {
    if (now.getDay() + n <= 6) {
      return now.getDay() + n;
    } else if (now.getDay() + n > 6 && now.getDay() + n < 14) {
      return now.getDay() + n - 7;
    } else if (now.getDay() + n >= 14) {
      return now.getDay() + n - 14;
    }
  };

  const dayOfWeek = (n) => {
    return week[day(n)];
  };

  return (
    <Section03>
      <Title>
        <h3>일별 예보</h3>
      </Title>
      <ConWrap>
        {mx ? (
          <>
            {a2p && (
              <>
                {a1p && (
                  <Con>
                    <Day>{dayOfWeek(1)}</Day>
                    <SIcon src={siv(a1p, a1s)} />
                    <TEMP>
                      <Max>{Math.round(mx?.[1]?.fcstValue)}°</Max>
                      <Min>{Math.round(mn?.[1]?.fcstValue)}°</Min>
                    </TEMP>
                  </Con>
                )}

                <Con>
                  <Day>{dayOfWeek(2)}</Day>
                  <SIcon src={siv(a2p, a2s)} />
                  <TEMP>
                    <Max>{Math.round(mx?.[2]?.fcstValue)}°</Max>
                    <Min>{Math.round(mn?.[2]?.fcstValue)}°</Min>
                  </TEMP>
                </Con>
              </>
            )}

            {mS ? (
              <>
                <Con>
                  <Day>{dayOfWeek(3)}</Day>
                  <SIcon src={mI(mS?.wf3Pm)} />
                  <TEMP>
                    <Max>{mm?.taMax3}°</Max>
                    <Min>{mm?.taMin3}°</Min>
                  </TEMP>
                </Con>
                <Con>
                  <Day>{dayOfWeek(4)}</Day>
                  <SIcon src={mI(mS?.wf4Pm)} />
                  <TEMP>
                    <Max>{mm?.taMax4}°</Max>
                    <Min>{mm?.taMin4}°</Min>
                  </TEMP>
                </Con>
                <Con>
                  <Day>{dayOfWeek(5)}</Day>
                  <SIcon src={mI(mS?.wf5Pm)} />
                  <TEMP>
                    <Max>{mm?.taMax5}°</Max>
                    <Min>{mm?.taMin5}°</Min>
                  </TEMP>
                </Con>
                <Con>
                  <Day>{dayOfWeek(6)}</Day>
                  <SIcon src={mI(mS?.wf6Pm)} />
                  <TEMP>
                    <Max>{mm?.taMax6}°</Max>
                    <Min>{mm?.taMin6}°</Min>
                  </TEMP>
                </Con>
                <Con>
                  <Day>{dayOfWeek(7)}</Day>
                  <SIcon src={mI(mS?.wf7Pm)} />
                  <TEMP>
                    <Max>{mm?.taMax7}°</Max>
                    <Min>{mm?.taMin7}°</Min>
                  </TEMP>
                </Con>
              </>
            ) : (
              <Loading />
            )}
          </>
        ) : (
          <Loading />
        )}
      </ConWrap>
    </Section03>
  );
};
