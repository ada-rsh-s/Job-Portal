import React, { useReducer, useContext } from "react";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";
import reducer from "./reducers";
const initalState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert(); 
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
    
  };
  return (
    <Appcontext.Provider value={{ ...state, displayAlert }}>
      {children}
    </Appcontext.Provider>
  );
};
const useAppContext = () => {
  return useContext(Appcontext);
};
export { AppProvider, initalState, useAppContext };
