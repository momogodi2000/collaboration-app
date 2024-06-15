import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const useProtectedRoute = (role) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user && user.role !== role) {
            router.push('/403'); // Redirect to a forbidden page or another route
        }
    }, [user, role, router]);
};

export default useProtectedRoute;
