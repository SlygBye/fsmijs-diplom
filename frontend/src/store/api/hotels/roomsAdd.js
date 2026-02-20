export const roomsAdd = async (formData) => {
  const url =
    process.env.REACT_APP_BACK_URL + process.env.REACT_APP_POSTFIX_ROOMS;
  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: formData,
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Комната успешно добавлена", data);
  } catch (e) {
    console.log("Ошибка в roomsAdd", response.status, e.message);
  }
};
