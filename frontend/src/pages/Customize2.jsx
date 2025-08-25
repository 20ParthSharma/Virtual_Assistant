import React, { useContext, useState } from "react";
import { userDataContext } from "../context/UserContext";
import axios from "axios";

function Customize2() {
  const { userData, backendImage, selectedImage, serverUrl, setUserData } =
    useContext(userDataContext);

  const [assistantName, setAssistantName] = useState(
    userData?.assistantName || ""
  );

  const handleUpdateAssistant = async () => {
  try {
    let formData = new FormData();
    formData.append("assistantName", assistantName);

    if (backendImage) {
      formData.append("assistantImage", backendImage);
    } else {
      formData.append("imageUrl", selectedImage);
    }

    const result = await axios.post(
      `${serverUrl}/api/user/update`,
      formData,
      { withCredentials: true }
    );

    console.log(result.data);

    // ✅ only save user object in context + localStorage
    setUserData(result.data.user);
    localStorage.setItem("userData", JSON.stringify(result.data.user));

  } catch (error) {
    console.error("Error updating assistant:", error);
  }
};


  return (
    <div className="w-full h-[100vh] bg-gradient-to-t from-black to-[#030353] flex justify-center items-center flex-col p-[20px]">
      <h1 className="text-white mb-[40px] text-[30px] text-center">
        Enter Your <span className="text-blue-200">Assistant Name</span>
      </h1>

      <input
        type="text"
        placeholder="eg. Shifra"
        className="w-full max-w-[600px] h-[60px] rounded-full px-5 text-lg border-2 border-white bg-transparent text-white placeholder-gray-300 outline-none"
        required
        onChange={(e) => setAssistantName(e.target.value)}
        value={assistantName}
      />

      {assistantName && (
        <button
          className="min-w-[300px] h-[60px] mt-[30px] text-black font-semibold cursor-pointer bg-white rounded-full text-[19px]"
          onClick={() => {
            handleUpdateAssistant();
          }}
        >

          Finally Create your Assistant
        </button>
      )}
    </div>
  );
}

export default Customize2;
