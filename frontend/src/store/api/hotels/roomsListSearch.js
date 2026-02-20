export const roomsListSearch = async (params) => {
  const { offset, limit, hotelId } = params;
  const newParams = new URLSearchParams({"offset": offset, "limit": limit, "hotelId": hotelId});
  const url = process.env.REACT_APP_BACK_URL + "/api/common/hotel-rooms/" + `?${newParams}`;
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
    console.log("Ошибка в roomsListSearch", response.status, e.message);
    return null;
  }
};
