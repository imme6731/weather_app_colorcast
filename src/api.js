import fetch from "node-fetch";

const serviceKey =
  "TG0AN8qwEJrLOC3O0%2BbF3Hrhwx2ZyXiADCIm1%2Fp0n0yguVZ4Vkdj3346OW0GQiqj3xXzyz0jfxTQhlcLER8USA%3D%3D";

const baseUrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0";

const now = new Date();
const year = now.getFullYear().toString();
const month = now.getMonth() + 1;
const date = now.getDate();
const hour = now.getHours() - 1;
const base_date = year + month + date;
const base_time = "0" + hour + "00";

export const getWeather = () =>
  fetch(
    `${baseUrl}/getUltraSrtFcst?serviceKey=${serviceKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${base_date}&base_time=${base_time}&nx=55&ny=127`
  ).then((res) => res.json());
//초단기예보
