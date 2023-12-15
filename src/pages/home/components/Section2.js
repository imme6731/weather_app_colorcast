import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { styled } from "styled-components";

const Section02 = styled.div`
  width: 100%;
  height: 142px;
  background-color: rgba(256, 256, 256, 0.4);
  border-radius: 15px;
  margin-bottom: 30px;
  padding-left: 20px;
  & .swiper-wrapper {
    align-items: center;
    margin-top: 20px;
  }
`;
const Con = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Time = styled.p`
  font-size: 14px;
  color: #707070;
  margin-bottom: 15px;
`;
const WeatherIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 15px;
`;
const Tempe = styled.h3`
  font-size: 18px;
  color: #343434;
`;

export const Section2 = ({ tM, siv, rM, sM, tt }) => {
  const params = {
    slidesPerView: 4.5,
    spaceBetween: 20,
  };

  return (
    <Section02>
      <Swiper {...params}>
        <SwiperSlide>
          <Con>
            <Time>
              {tM?.[0] < "13"
                ? tM?.[0] > "9"
                  ? `오전 ${tM?.[0]}시`
                  : `오전 ${tM?.[0].slice(1, 2)}시`
                : `오후 ${tM?.[0] - 12}시`}
            </Time>
            <WeatherIcon src={siv(rM?.[0], sM?.[0])} />
            <Tempe>{tt?.[0]?.fcstValue}°</Tempe>
          </Con>
        </SwiperSlide>
        <SwiperSlide>
          <Con>
            <Time>
              {tM?.[1] < "13"
                ? tM?.[1] > "9"
                  ? `오전 ${tM?.[1]}시`
                  : `오전 ${tM?.[1].slice(1, 2)}시`
                : `오후 ${tM?.[1] - 12}시`}
            </Time>
            <WeatherIcon src={siv(rM?.[1], sM?.[1])} />
            <Tempe>{tt?.[1]?.fcstValue}°</Tempe>
          </Con>
        </SwiperSlide>
        <SwiperSlide>
          <Con>
            <Time>
              {tM?.[2] < "13"
                ? tM?.[2] > "9"
                  ? `오전 ${tM?.[2]}시`
                  : `오전 ${tM?.[2].slice(1, 2)}시`
                : `오후 ${tM?.[2] - 12}시`}
            </Time>
            <WeatherIcon src={siv(rM?.[2], sM?.[2])} />
            <Tempe>{tt?.[2]?.fcstValue}°</Tempe>
          </Con>
        </SwiperSlide>
        <SwiperSlide>
          <Con>
            <Time>
              {tM?.[3] < "13"
                ? tM?.[3] > "9"
                  ? `오전 ${tM?.[3]}시`
                  : `오전 ${tM?.[3].slice(1, 2)}시`
                : `오후 ${tM?.[3] - 12}시`}
            </Time>
            <WeatherIcon src={siv(rM?.[3], sM?.[3])} />
            <Tempe>{tt?.[3]?.fcstValue}°</Tempe>
          </Con>
        </SwiperSlide>
        <SwiperSlide>
          <Con>
            <Time>
              {tM?.[4] < "13"
                ? tM?.[4] > "9"
                  ? `오전 ${tM?.[4]}시`
                  : `오전 ${tM?.[4].slice(1, 2)}시`
                : `오후 ${tM?.[4] - 12}시`}
            </Time>
            <WeatherIcon src={siv(rM?.[4], sM?.[4])} />
            <Tempe>{tt?.[4]?.fcstValue}°</Tempe>
          </Con>
        </SwiperSlide>
        <SwiperSlide>
          <Con>
            <Time>
              {tM?.[5] < "13"
                ? tM?.[5] > "9"
                  ? `오전 ${tM?.[5]}시`
                  : `오전 ${tM?.[5].slice(1, 2)}시`
                : `오후 ${tM?.[5] - 12}시`}
            </Time>
            <WeatherIcon src={siv(rM?.[5], sM?.[5])} />
            <Tempe>{tt?.[5]?.fcstValue}°</Tempe>
          </Con>
        </SwiperSlide>
      </Swiper>
    </Section02>
  );
};