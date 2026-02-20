export const roomsByIdSearch = async (param) => {
  const url = process.env.REACT_APP_BACK_URL + `/api/admin/hotel-rooms/${param}`;
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
    console.log("Ошибка в roomsByIdSearch", response.status, e.message);
    return null;
  }
};
