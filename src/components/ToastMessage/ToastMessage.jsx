import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteMessage } from "../../store/messageSlice";
import style from "./ToastMessage.module.scss";
const ToastMessage = (props) => {
  const listMessage = useSelector((state) => state.message.message);
  const dispatch = useDispatch();
  return (
    <div className={style.toast}>
      {listMessage.map((message) => {
        return (
          <div className={`${style["toast-item"]} ${style[message.type]}`}>
            <span
              className={style.close}
              onClick={() => dispatch(deleteMessage(message.id))}
            >
              &#8855;
            </span>
            <p className={style.text}>{`${message.text}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ToastMessage;
