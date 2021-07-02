const initialState = {
  parkings: [],
  noResults: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PARKINGS":
      console.log("ENTRE REDUCER");
      return {
        ...state,
        parkings: action.payload,
        noResults: false,
      };
    case "NO_RESULTS":
      console.log("ENTRE REDUCER");
      return {
        ...state,
        noResults: action.payload,
      };

    default:
      return state;
  }
}
