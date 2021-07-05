import axios from "axios";

const url = `/v3/businesses/search?term="parking"`;

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer OCLWs0cBv8MqPuoukQSinGPlcTxRhtbkqQiMtYFrd1-ATjn3_9Bij8IWki8xWamjivyJ77_ny0SHs09pcXVa7OTSjOKTF3c86pz1rT7x5be4jOt3wDNuMfvsDW3gYHYx`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function getParkings(cityCode) {
  return async function (dispatch) {
    try {
      let arrayParkings = [];
      let offsetInteger = 0;
      for (let i = 1; i < 20; i++) {
        const req = await axios.get(
          `${url}&location=${cityCode}&offset=${offsetInteger}&limit=50&sort_by=rating`
        );
        const result = req.data.businesses;
        arrayParkings = arrayParkings.concat(result);
        offsetInteger = offsetInteger + 50;
      }
      if (arrayParkings.length > 0) {
        dispatch({
          type: "GET_PARKINGS",
          payload: arrayParkings,
        });
      }
    } catch (error) {
      dispatch({
        type: "NO_RESULTS",
        payload: true,
      });
    }
  };
}
