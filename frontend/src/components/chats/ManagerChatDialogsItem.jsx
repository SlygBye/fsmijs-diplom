import chMark from "../../img/check-mark.jpg";
import dChMark from "../../img/double-check-mark.jpg";

export default function ManagerChatDialogItem({ item, chatOwner }) {
  const checkRead = item.readAt ? dChMark : chMark;

  let clientRead = (
    <div className="client-read">
      <img className="message-read-imgs" src={checkRead} alt="view" />
    </div>
  );
  let managerRead = (
    <div className="manager-read">
      <img className="message-read-imgs" src={checkRead} alt="view" />
    </div>
  );
  if (chatOwner.role === "client") {
    clientRead = null;
  } else {
    managerRead = null;
  }

  return (
    <>
      {item.author === chatOwner._id ? (
        <div className="message-wrap" style={{ justifyContent: "flex-end" }}>
          <div className="message-client">
            {item.text}
            {managerRead}
          </div>
        </div>
      ) : (
        <div>
          <div className="message-wrap">
            <div className="message-manager">
              {item.text}
              {clientRead}
            </div>
          </div>
        </div>
      )}
      <div className="message-wrap"></div>
    </>
  );
}
