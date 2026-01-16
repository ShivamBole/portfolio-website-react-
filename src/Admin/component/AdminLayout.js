import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import { isAdminTokenValid } from "../../utils/auth";
import ".././admin.css"
const AdminLayout = () => {
  // Extra safety (token expired while inside admin)
  if (!isAdminTokenValid()) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="flex min-h-screen bg-primary text-gray-200">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <TopNavbar />
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
