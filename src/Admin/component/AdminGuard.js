// import { useState, useEffect } from "react";
// import axios from "axios";
// // import AddProject from "./AddProject";
// import { jwtDecode } from "jwt-decode";
// import { Navigate } from "react-router-dom";
// import { isAdminTokenValid } from "../../utils/auth";

// const AdminGuard = ({children}) => {
//   const [password, setPassword] = useState("");
//   const [authorized, setAuthorized] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // auto login if token exists

// useEffect(() => {
//     const isAdminTokenValid = () => {
//   const token = localStorage.getItem("adminToken");
//   if (!token) return false;

//   try {
//     const decoded = jwtDecode(token);
//     const currentTime = Date.now() / 1000;

//     return decoded.exp > currentTime;
//   } catch {
//     return false;
//   }
// };
//   // if (isAdminTokenValid()) {
//   //   setAuthorized(true);
//   // } else {
//   //   localStorage.removeItem("adminToken");
//   // }

//     if (!isAdminTokenValid()) {
//     return <Navigate to="/" replace />;
//   }
// }, []);


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/admin/verify",
//         { password }
//       );

//       localStorage.setItem("adminToken", res.data.token);
//       setAuthorized(true);
//     } catch (err) {
//       setError("Incorrect password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (authorized) {
//     return children;;
//   }

//   return (
//     <div style={styles.container} >
//       <h2 className="my-5">Admin Access Required</h2>

//       <form onSubmit={handleSubmit}  style={styles.form}>
//         <input
//           type="password"
//           placeholder="Enter admin password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="p-2 rounded-lg text-black"
//         />

//         {error && <p style={styles.error}>{error}</p>}

//         <button type="submit" className="btn py-2 mt-2" disabled={loading}>
//           {loading ? "Verifying..." : "Enter"}
//         </button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     minHeight: "60vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "12px",
//     width: "280px",
//   },
//   error: {
//     color: "red",
//     fontSize: "14px",
//   },
// };

// export default AdminGuard;