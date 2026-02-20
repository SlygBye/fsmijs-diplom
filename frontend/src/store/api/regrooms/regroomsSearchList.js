export const regRoomsSearchList = async (params) => {
  const url = process.env.REACT_APP_BACK_URL + process.env.REACT_APP_POSTFIX_RESERVATION + `?userid=${params}`;
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
    console.log("Ошибка в regRoomsSearchList", response.status, e.message);
  }
};
