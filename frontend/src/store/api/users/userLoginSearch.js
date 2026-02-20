export const userLoginSearch = async (param) => {
  const url = process.env.REACT_APP_BACK_URL + process.env.REACT_APP_POSTFIX_LOGIN;
  const { email, password } = param;
  const body = { email, passwordHash: password };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(body),
  };
    try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("Ошибка в userLoginSearch", response.status, e.message);
    return null;
  }
};
