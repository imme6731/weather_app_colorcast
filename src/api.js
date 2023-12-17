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

export const now = new Date();
export const year = now.getFullYear().toString();
export const month = now.getMonth() + 1;
export const date = now.getDate();
export const hour = now.getHours();
export const hours = ("0" + now.getHours()).slice(-2);
export const minutes = ("0" + now.getMinutes()).slice(-2);
export const base_date = year + month + date;
export const after1day = year + month + (date + 1);
export const after2day = year + month + (date + 2);

const time = () => {
  if (minutes > "30") {
    return hours + "30";
  } else {
    var getHoursTime = now.getHours() - 1;
    var setHoursTime = ("0" + getHoursTime).slice(-2);
    return setHoursTime + "30";
  }
};

export const tmFc = () => {
  if (now.getHours() < "6") {
    return year + month + (date - 1);
  } else if (now.getHours() >= "6") {
    return year + month + date;
  }
};

export const tmFcPre = () => {
  if (now.getHours() < "6") {
    return year + month + (date - 2);
  } else if (now.getHours() >= "6") {
    return year + month + (date - 1);
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
    `${baseUrl}/getVilageFcst?serviceKey=${serviceKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${tmFc()}&base_time=0200&nx=${x}&ny=${y}`,
    options
  ).then((res) => res.json());
// 단기예보

export const reverseGeo = (x, y) =>
  fetch(
    `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?input_coord=WGS84&output_coord=WGS84&x=${y}&y=${x}`,
    geoOptions
  ).then((res) => res.json());
// 역지오코딩 (지역주소 추출)

export const getMidWeather = () =>
  fetch(
    `https://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&dataType=JSON&regId=11H20201&tmFc=${tmFc()}0600`,
    options
  ).then((res) => res.json());
//중기예보 기온

export const getMidSky = () =>
  fetch(
    `https://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&dataType=JSON&regId=11H20000&tmFc=${tmFc()}0600`,
    options
  ).then((res) => res.json());
//중기예보 육상

export const getTmDust = (geoName) =>
  fetch(
    `https://apis.data.go.kr/B552584/MsrstnInfoInqireSvc/getTMStdrCrdnt?serviceKey=${serviceKey}&returnType=JSON&numOfRows=100&pageNo=1&umdName=${geoName}`,
    options
  ).then((res) => res.json());
//현재위치 tm 좌표 구하기

export const getNearbyDust = (tmX, tmY) =>
  fetch(
    `https://apis.data.go.kr/B552584/MsrstnInfoInqireSvc/getNearbyMsrstnList?serviceKey=${serviceKey}&returnType=JSON&tmX=${tmX}&tmY=${tmY}&ver=1.1`,
    options
  ).then((res) => res.json());
//현재위치 근처 대기오염 측정소 찾기

export const getDust = (stationName) =>
  fetch(
    `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?serviceKey=${serviceKey}&returnType=JSON&numOfRows=100&pageNo=1&stationName=${stationName}&dataTerm=DAILY&ver=1.3`,
    options
  ).then((res) => res.json());
//현재위치 근처 대기오염 측정소 찾기
