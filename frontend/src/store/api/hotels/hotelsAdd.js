export const hotelsAdd = async (formData) => {
  const url = process.env.REACT_APP_BACK_URL + process.env.REACT_APP_POSTFIX_HOTELS;
  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: formData,
  };
  try {
    const response = await fetch(url, options);
    console.log("Гостиница успешно добавлена!", response);
  } catch (e) {
    console.log("Ошибка в hotelsAdd", response.status, e.message);
  }
};
