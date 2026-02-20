export const mgrRegRoomsDelete = async (params) => {
  const url = process.env.REACT_APP_BACK_URL + "/api/manager/reservations" + `/${params}`;
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
    console.log("Бронь номера успешно удалена менеджером!", data);
  } catch (e) {
    console.log("Ошибка в mgrRegRoomsDelete", response.status, e.message);
  }
};
