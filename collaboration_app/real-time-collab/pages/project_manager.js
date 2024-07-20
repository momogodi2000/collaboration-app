import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';

export default function ProjectManager() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/signin');
        }
    }, []);

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:8000/api/logout/', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            localStorage.removeItem('token');
            router.push('/signin');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Project Manager Dashboard</h1>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
    );
}
