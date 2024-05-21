import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

export const RouteGuard = ({ children, allowedRoles }) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            if (!user || !allowedRoles.includes(user.role)) {
                router.push('/signin');
            }
        }
    }, [user, loading]);

    if (loading || !user) {
        return <div>Loading...</div>; // Add a loading spinner or component here
    }

    return children;
};
