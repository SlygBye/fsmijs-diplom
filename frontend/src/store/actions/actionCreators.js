import {
  USER_TEST,
  USER_LOGIN,
  USER_LOGOUT,
  USER_SIGNUP,
  USERS_UPDATE,
  USERS_LIST,
  USERS_DELETE,
  HOTELS_LIST,
  HOTELS_DELETE,
  HOTELS_IMAGES,
  HOTELS_ADD,
  ROOMS_LIST,
  ROOMS_DELETE,
  ROOMS_IMAGES,
  ROOMS_ADD,
  REG_LIST,
  REG_ADD,
  REG_DELETE,
  REG_LOCAL_CLEAR,
  USER_ERROR,
  MGR_REG_LIST,
  MGR_REG_DELETE,
} from "./actionTypes";

export function actionUserTest(user) {
  return { type: USER_TEST, payload: { user } };
}
export function actUserLogin(payload) {
  return { type: USER_LOGIN, payload: payload };
}
export function actUserLogout() {
  return { type: USER_LOGOUT, payload: {} };
}
export function actUserError(payload) {
  return { type: USER_ERROR, payload: payload };
}

export function actUserSignup(payload) {
  return { type: USER_SIGNUP, payload: payload };
}
export function actUsersList(payload) {
  return { type: USERS_LIST, payload: payload };
}
export function actUsersDelete(id) {
  return { type: USERS_DELETE, payload: id };
}
export function actUsersUpdate(payload) {
  return { type: USERS_UPDATE, payload: payload };
}

export function actHotelsList(payload) {
  return { type: HOTELS_LIST, payload: payload };
}
export function actHotelsAdd(payload) {
  return { type: HOTELS_ADD, payload: payload };
}
export function actHotelsDelete(id) {
  return { type: HOTELS_DELETE, payload: id };
}
export function actHotelsImages(arrImages) {
  return { type: HOTELS_IMAGES, payload: arrImages };
}

export function actRoomsList(payload) {
  return { type: ROOMS_LIST, payload: payload };
}
export function actRoomsAdd(payload) {
  return { type: ROOMS_ADD, payload: payload };
}
export function actRoomsDelete(id) {
  return { type: ROOMS_DELETE, payload: id };
}
export function actRoomsImages(arrImages) {
  return { type: ROOMS_IMAGES, payload: arrImages };
}

export function actRegRoomsList(payload) {
  return { type: REG_LIST, payload: payload };
}
export function actRegRoomsAdd(payload) {
  return { type: REG_ADD, payload: payload };
}
export function actRegRoomsDelete(id) {
  return { type: REG_DELETE, payload: id };
}
export function actRegRoomsClear(id) {
  return { type: REG_LOCAL_CLEAR, payload: id };
}

export function actMgrRegRoomsList(payload) {
  return { type: MGR_REG_LIST, payload: payload };
}
export function actMgrRegRoomsDelete(id) {
  return { type: MGR_REG_DELETE, payload: id };
}