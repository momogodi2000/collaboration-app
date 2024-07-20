import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';



export default function SignUp() {
    const [form, setForm] = useState({ username: '', email: '', password: '', role: 'developer' });
    const router = useRouter();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/signup/', form);
            router.push('/signin');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select className="form-control" name="role" onChange={handleChange}>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
            <p>Already have an account? <Link href="/signin">Sign In</Link></p>
        </div>
    );
}
