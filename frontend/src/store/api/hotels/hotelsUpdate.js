export const hotelsUpdate = async (id, formData) => {
  const url = process.env.REACT_APP_BACK_URL + process.env.REACT_APP_POSTFIX_HOTELS + `/${id}`;
  const options = {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "*",
    },
    body: formData,
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Гостиница успешно добавлена!", data);
  } catch (e) {
    console.log("Ошибка в hotelsUpdate", response.status, e.message);
  }
};
