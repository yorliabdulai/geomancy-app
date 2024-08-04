import AdminDashboard from '../components/AdminDashboard';
import AdminOrders from '../components/AdminOrders';
import withAdminAuth from '../utils/withAdminAuth';

const AdminPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      <AdminDashboard />
      <AdminOrders />
    </div>
  );
};

export default withAdminAuth(AdminPage);
