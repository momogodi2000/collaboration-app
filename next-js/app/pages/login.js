import { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../services/api';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await login({ email, password });
            setUser(user);
            if (user.role === 'developer') router.push('/developer');
            if (user.role === 'manager') router.push('/manager');
            if (user.role === 'designer') router.push('/designer');
            if (user.role === 'administrator') router.push('/administrator');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;
