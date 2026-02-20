export const hotelsListSearch = async (params) => {
  const { offset, limit, search } = params;
  const newParams = new URLSearchParams({"offset": offset, "limit": limit, "search": search});
  const url = process.env.REACT_APP_BACK_URL + process.env.REACT_APP_POSTFIX_HOTELS + `?${newParams}`;
  const options = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json;charset=utf-8",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("Ошибка в hotelsListSearch", response.status, e.message);
    return null;
  }
};
