import React, { useEffect, useRef } from "react";
import { signInAsAdmin ,uploadFileAvatar} from "../api/api";
const Admin = (props) => {
  const fileInput = useRef();
  const init = async () => {
    signInAsAdmin();
  };
  const uploadFile = async (e) => {
    console.log(fileInput.current.files[0]);
    uploadFileAvatar(fileInput.current.files[0])
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      Admin
      <input type="file" onChange={uploadFile} ref={fileInput} />
    </div>
  );
};

export default Admin;
