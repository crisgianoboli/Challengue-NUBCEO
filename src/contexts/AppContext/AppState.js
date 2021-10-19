import React, { useReducer } from "react";
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";

import axios from "axios";

const AppState = (props) => {
  const initialState = {
    bands: [],
    selectedBand: null,
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getBands = async () => {
    const res = await axios.get(
      "https://my-json-server.typicode.com/improvein/dev-challenge/bands"
    );
    console.log("bandas", res.data);
    dispatch({
      type: "GET_BANDS",
      payload: res.data,
    });
  };

  const getSelectedBands = async (id) => {
    const res = await axios.get(
      "https://my-json-server.typicode.com/improvein/dev-challenge/bands/" + id
    );
    console.log("banda", res.data);
    dispatch({
      type: "GET_SELECTE_BAND",
      payload: res.data,
    });
  };

  return (
    <AppContext.Provider
      value={{
        bands: state.bands,
        selectedBand: state.selectedBands,
        getBands,
        getSelectedBands,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
