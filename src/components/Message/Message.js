import React from "react";
import "./Message.scss";

const Message = (props) => {
  const { textId } = props;

  let messageText = "I`m waiting...";
  if (textId === 1) messageText = "You haven`t active todos";
  else if (textId === 2) messageText = "You haven`t completed todos";

  return (
    <div className="message">
      <h2>{messageText}</h2>
      {textId === 0 && <img src={require("../../images/dog.png")} alt="dog" />}
    </div>
  );
};

export default Message;
