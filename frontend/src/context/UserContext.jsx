// context/UserContext.jsx

// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const userDataContext = createContext();

// function UserContextProvider({ children }) {
//   const serverUrl = "http://localhost:8000";
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [frontendImage, setFrontendImage] = useState(null);
//   const [backendImage, setBackendImage] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);

//   // ✅ Fetch current user from backend
//   const handleCurrentUser = async () => {
//     try {
//       const result = await axios.get(`${serverUrl}/api/user/current`, {
//         withCredentials: true,
//       });

//       // Some backends send { user: {...} }, some just {...}
//       const user = result.data.user ? result.data.user : result.data;

//       setUserData(user);
//       localStorage.setItem("userData", JSON.stringify(user));
//     } catch (error) {
//       console.log(
//         "Current user not found:",
//         error.response?.data || error.message
//       );
//       setUserData(null);
//       localStorage.removeItem("userData");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // ✅ Load saved user instantly
//     const savedUser = localStorage.getItem("userData");
//     if (savedUser) {
//       setUserData(JSON.parse(savedUser));
//     }

//     // ✅ Always verify with backend to avoid stale user
//     handleCurrentUser();
//   }, []);

//   const value = {
//     serverUrl,
//     userData,
//     setUserData,
//     loading,
//     backendImage,
//     setBackendImage,
//     frontendImage,
//     setFrontendImage,
//     selectedImage,
//     setSelectedImage,
//   };

//   return (
//     <userDataContext.Provider value={value}>
//       {children}
//     </userDataContext.Provider>
//   );
// }

// export default UserContextProvider;


import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const userDataContext = createContext();

function UserContextProvider({ children }) {
  const serverUrl = "http://localhost:8000";
  const [userData, setUserData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // ✅ Add this
  const [backendImage, setBackendImage] = useState(null);   // ✅ Add this
  const [frontendImage, setFrontendImage] = useState(null); // ✅ Add this

  const handleCurrentUser = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/user/current`, {
        withCredentials: true,
      });
      setUserData(result.data);
    } catch (error) {
      console.error("Current user fetch error:", error.response?.data || error);
    }
  };

  useEffect(() => {
    handleCurrentUser();
  }, []);

  return (
    <userDataContext.Provider
      value={{
        serverUrl,
        userData,
        setUserData,
        selectedImage,
        setSelectedImage,
        backendImage,
        setBackendImage,
        frontendImage,
        setFrontendImage,
      }}
    >
      {children}
    </userDataContext.Provider>
  );
}

export default UserContextProvider;


