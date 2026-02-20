export const regRoomsDelete = async (params) => {
  const url = process.env.REACT_APP_BACK_URL + process.env.REACT_APP_POSTFIX_RESERVATION + `/${params}`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Бронь номера успешно удалена клиентом!", data);
  } catch (e) {
    console.log("Ошибка в regRoomsDelete", response.status, e.message);
  }
};
