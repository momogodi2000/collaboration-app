import { RouteGuard } from '../../components/RouteGuard';

const usersDashboard = () => {
    return (
        <RouteGuard allowedRoles={['users']}>
            <div>
                <h1>users Dashboard</h1>
                {/* Admin-specific content */}
            </div>
        </RouteGuard>
    );
};

export default AdminDashboard;
