import React, { useEffect, useRef } from "react";
import { signInAsAdmin, uploadFileAvatar, getListUser } from "../api/api";
import { useDispatch } from "react-redux";
import { addToastMessage } from "../store/messageSlice";
import { MESSAGE_TYPE } from "../constant/index";
const Admin = (props) => {
  const dispatch = useDispatch();
  const fileInput = useRef();
  const init = async () => {
    signInAsAdmin();
    getListUser();
  };
  const uploadFile = async (e) => {
    console.log(fileInput.current.files[0]);
    uploadFileAvatar(fileInput.current.files[0]);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      Admin
      <input type="file" onChange={uploadFile} ref={fileInput} />
      <button
        onClick={() =>
          dispatch(
            addToastMessage({
              text: "quansfdfsdgo",
              type: MESSAGE_TYPE.ERROR,
            })
          )
        }
      >
        click
      </button>
    </div>
  );
};

export default Admin;
