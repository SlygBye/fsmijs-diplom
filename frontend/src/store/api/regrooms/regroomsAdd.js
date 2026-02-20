export const regRoomsAdd = async (params) => {
  const url = process.env.REACT_APP_BACK_URL + process.env.REACT_APP_POSTFIX_RESERVATION;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(params),
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Бронь номера успешно добавлена клиентом!", data);
  } catch (e) {
    console.log("Ошибка в regRoomsAdd", response.status, e.message);
  }
};
