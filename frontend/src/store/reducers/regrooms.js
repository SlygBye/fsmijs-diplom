import {
  REG_LIST,
  REG_ADD,
  REG_DELETE,
  REG_LOCAL_CLEAR,
  MGR_REG_LIST,
  MGR_REG_DELETE,
} from "../actions/actionTypes";

const initialState = {
  regRooms: null,
  addRegRooms: false,
  loading: false,
  error: null,
};

export default function reducerRegRooms(state = initialState, action) {
  switch (action.type) {
    case REG_LIST:
      if (typeof action.payload === "string") {
        return {
          ...state,
          regRooms: action.payload,
          addRegRooms: false,
          loading: false,
          error: null,
        };
      }
      localStorage.setItem("reservations", JSON.stringify(action.payload));
      return {
        ...state,
        regRooms: action.payload,
        addRegRooms: false,
        loading: false,
        error: null,
      };

    case REG_ADD:
      if (!action.payload) {
        break;
      }
      return {
        ...state,
        addRegRooms: true,
        loading: false,
        error: null,
      };
    case REG_DELETE:
      return {
        ...state,
        addRegRooms: true,
        loading: false,
        error: null,
      };
    case REG_LOCAL_CLEAR:
      return {
        ...state,
        regRooms: [],
        loading: false,
        error: null,
      };

    case MGR_REG_LIST:
      if (typeof action.payload === "string") {
        return {
          ...state,
          loading: false,
          error: null,
        };
      }
      localStorage.setItem("reservations", JSON.stringify(action.payload));
      return {
        ...state,
        regRooms: action.payload,
        addRegRooms: false,
        loading: false,
        error: null,
      };

    case MGR_REG_DELETE:
      return {
        ...state,
        addRegRooms: true,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
