import { RouteGuard } from '../../components/RouteGuard';

const AdminDashboard = () => {
    return (
        <RouteGuard allowedRoles={['admin']}>
            <div>
                <h1>Admin Dashboard</h1>
                {/* Admin-specific content */}
            </div>
        </RouteGuard>
    );
};

export default AdminDashboard;
