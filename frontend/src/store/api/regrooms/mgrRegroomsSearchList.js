export const mgrRegRoomsSearchList = async (params) => {
  const url = process.env.REACT_APP_BACK_URL + "/api/manager/reservations" + `?userid=${params}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("Ошибка в mgrRegRoomsSearchList", response.status, e.message);
    return null;
  }
};
