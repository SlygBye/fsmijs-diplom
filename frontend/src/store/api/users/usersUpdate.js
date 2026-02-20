export const usersUpdate = async (param) => {
  const { id } = param;
  const url = process.env.REACT_APP_BACK_URL + process.env.REACT_APP_POSTFIX_USERS + "/" + id;
  const { name, contactPhone, role } = param;
  const body = { name, contactPhone, role };
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("Ошибка в usersUpdate", response.status, e.message);
    return null;
  }
};
