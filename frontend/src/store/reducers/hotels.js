import {
  HOTELS_LIST,
  HOTELS_DELETE,
  HOTELS_IMAGES,
  HOTELS_ADD,
} from "../actions/actionTypes";

const initialState = {
  hotels: [],
  loading: false,
  error: null,
  hotelsImages: [],
};

export default function reducerHotelsList(state = initialState, action) {
  switch (action.type) {
    case HOTELS_LIST:
      return {
        ...state,
        hotels: action.payload,
        loading: false,
        error: null
      };
    case HOTELS_ADD:
      return {
        ...state,
        hotels: [
          ...state.hotels,
          action.payload
        ],  
        loading: false,
        error: null
      };
    case HOTELS_DELETE:
      const filteredHotels = state.hotels.filter((hotel) => hotel._id !== action.payload);
      return {
        ...state,
        hotels: filteredHotels,
        loading: false,
        error: null
      };
    case HOTELS_IMAGES:
      return {
        ...state,
        hotelsImages: action.payload,
        loading: false,
        error: null
      };
    default:
      return state;
  }
}
