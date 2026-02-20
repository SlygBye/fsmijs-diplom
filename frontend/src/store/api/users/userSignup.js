export const userSignup = async (param) => {
  const url = process.env.REACT_APP_BACK_URL + process.env.REACT_APP_POSTFIX_SIGNUP;
  const { email, passwordHash, name, phone, role } = param;
  const body = { email, passwordHash, name, contactPhone: phone, role };
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
    console.log("Ошибка в userSignup", response.status, e.message);
    return null;
  }
};
