export const hotelsDelete = async (param) => {
  const url = process.env.REACT_APP_BACK_URL + process.env.REACT_APP_POSTFIX_HOTELS + "/" + param;
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
    console.log("Отель удален", data);
    return data;
  } catch (e) {
    console.log("Ошибка в hotelsAdd", response.status, e.message);
  }
};
