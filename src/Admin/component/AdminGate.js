import { isAdminTokenValid } from "../../utils/auth";
import AdminLogin from "./AdminLogin";
import AdminLayout from "./AdminLayout";
const AdminGate = () => {
  // If token is valid → dashboard
  if (isAdminTokenValid()) {
    return <AdminLayout />;
  }

  // Else → password screen
  return <AdminLogin />;
};

export default AdminGate;
