export const roomsUpdate = async (id, formData) => {
  const url = process.env.REACT_APP_BACK_URL + process.env.REACT_APP_POSTFIX_ROOMS + `/${id}`;
  const options = {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: formData,
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Номер успешно изменен!", data);
  } catch (e) {
    console.log("Ошибка в roomsUpdate", response.status, e.message);
  }
};
