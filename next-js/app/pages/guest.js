import { RouteGuard } from '../../components/RouteGuard';

const guestDashboard = () => {
    return (
        <RouteGuard allowedRoles={['guest']}>
            <div>
                <h1>guest Dashboard</h1>
                {/* Admin-specific content */}
            </div>
        </RouteGuard>
    );
};

export default AdminDashboard;
