import { styled } from "styled-components";

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
const ConWrap = styled.div``;
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
  width: 40px;
  height: 40px;
`;
const TEMP = styled.div`
  display: flex;
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

export const Section3 = ({ mI, mS, mm }) => {
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
    if (now.getDay() + n < 6) {
      return now.getDay() + n;
    } else if (now.getDay() + n >= 6 && now.getDay() + n < 14) {
      return now.getDay() + n - 7;
    } else if (now.getDay() + n >= 14) {
      return now.getDay() + n - 14;
    }
  };

  const dayOfWeek = (n) => {
    return week[day(n)];
  };
  // console.log(now.getDay());
  // console.log(day(9));
  // console.log(dayOfWeek(9));

  return (
    <Section03>
      <Title>
        <h3>일별 예보</h3>
      </Title>
      <ConWrap>
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
        <Con>
          <Day>{dayOfWeek(8)}</Day>
          <SIcon src={mI(mS?.wf8)} />
          <TEMP>
            <Max>{mm?.taMax8}°</Max>
            <Min>{mm?.taMin8}°</Min>
          </TEMP>
        </Con>
        <Con>
          <Day>{dayOfWeek(9)}</Day>
          <SIcon src={mI(mS?.wf9)} />
          <TEMP>
            <Max>{mm?.taMax9}°</Max>
            <Min>{mm?.taMin9}°</Min>
          </TEMP>
        </Con>
      </ConWrap>
    </Section03>
  );
};
