import { GET_BANDS, GET_SELECTE_BAND } from "../type";

export default function (state, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_BANDS:
      return {
        ...state,
        bands: payload,
      };
    case GET_SELECTE_BAND:
      return {
        ...state,
        getSelectedBands: payload,
      };
    default:
      return state;
  }
}
