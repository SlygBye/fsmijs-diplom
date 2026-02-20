export const readMessage = async (params) => {
  const { id, body } = params;
  const url = process.env.REACT_APP_BACK_URL + `/api/common/support-requests/${id._id}/messages/read`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (e) {
    console.log("Ошибка в readMessage", response.status, e.message);
    return null;
  }
};
