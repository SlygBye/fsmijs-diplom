import { actUserError } from "../store/actions/actionCreators";
import { useDispatch } from "react-redux";

export default function WinError({ children, type, clearFields }) {
  const dispatch = useDispatch();

  const messageStyle = {
    borderRadius: "5px",
    color: "black",
    fontSize: "20px",
    width: "93%",
    minHeight: "60px",
    padding: "20px",
    marginBottom: "20px",
  };

  if (type === "error") {
    console.log("err type", type);
    messageStyle.border = "3px solid #dc3545";
    messageStyle.backgroundColor = "#f8d7da";
  } else {
    messageStyle.border = "3px solid #198754";
    messageStyle.backgroundColor = "#d1e7dd";
  }

  function fnClose() {
    const body = {
      message: "close",
      statusCode: "",
    };
    dispatch(actUserError(body));
    clearFields();
  }

  return (
    <>
      <div className={messageStyle}>
        <div>{children}</div>
        <button
          className="hotels-item-btn"
          style={{ marginTop: "10px" }}
          onClick={fnClose}
        >
          Закрыть
        </button>
      </div>
    </>
  );
}
