import fetch from "node-fetch";

const serviceKey =
  "TG0AN8qwEJrLOC3O0%2BbF3Hrhwx2ZyXiADCIm1%2Fp0n0yguVZ4Vkdj3346OW0GQiqj3xXzyz0jfxTQhlcLER8USA%3D%3D";

const baseUrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0";

const options = {
  headers: {
    Accept: "application / json",
  },
  method: "GET",
};

const geoOptions = {
  headers: {
    Accept: "application / json",
    Authorization: `KakaoAK da34782ab3bcd9ca03254a6944ee2688`,
  },
  method: "GET",
};

const now = new Date();
const year = now.getFullYear().toString();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = ("0" + now.getHours()).slice(-2);
const minutes = ("0" + now.getMinutes()).slice(-2);
export const base_date = year + month + date;
const date_start = year + month + (date - 1);

const time = () => {
  if (minutes > "30") {
    return hours + "30";
  } else {
    var getHoursTime = now.getHours() - 1;
    var setHoursTime = ("0" + getHoursTime).slice(-2);
    return setHoursTime + "30";
  }
};

export const getUltraWeather = (x, y) =>
  fetch(
    `${baseUrl}/getUltraSrtFcst?serviceKey=${serviceKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${base_date}&base_time=${time()}&nx=${x}&ny=${y}`,
    options
  ).then((res) => res.json());
//초단기예보

export const getWeather = (x, y) =>
  fetch(
    `${baseUrl}/getVilageFcst?serviceKey=${serviceKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${date_start}&base_time=0500&nx=${x}&ny=${y}`,
    options
  ).then((res) => res.json());
// 단기예보

export const reverseGeo = (x, y) =>
  fetch(
    `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?input_coord=WGS84&output_coord=WGS84&x=${y}&y=${x}`,
    geoOptions
  ).then((res) => res.json());
// 역지오코딩 (지역주소 추출)
