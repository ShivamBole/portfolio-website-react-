import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
const TopNavbar = () => {
  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/";
  };

  return (
    <div className="h-16 px-6 flex items-center justify-between border-b border-gray-700">
      <h2 className="h3 mb-0">Admin Dashboard</h2>
      <div className="w-max flex flex-row justify-content-center items-center gap-5">
         <Link to="/" className="gradient text-2xl my-2 content-center p-5 rounded-full">
              <BiHomeAlt />
         </Link>
      <button onClick={logout} className="btn btn-sm">
        Logout
      </button>
      </div>
    </div>
  );
};

export default TopNavbar;
