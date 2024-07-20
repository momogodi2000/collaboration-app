import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SignIn() {
    const [form, setForm] = useState({ username: '', password: '' });
    const router = useRouter();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', form, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                const { access, role } = response.data;
                localStorage.setItem('token', access);
                router.push(`/${role}`);
            } else {
                console.error('Login failed:', response.data);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
            <p>Don't have an account? <Link href="/signup">Sign Up</Link></p>
        </div>
    );
}
