export const findRequestById = async (params) => {
  const newParams = new URLSearchParams({ id: params });
  const url = process.env.REACT_APP_BACK_URL + `/api/manager/support-request/?${newParams}`;
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
    console.log("Ошибка в findRequestById", response.status, e.message);
    return null;
  }
};
