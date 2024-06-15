import axios from 'axios';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

export const useAuth = () => {
  const router = useRouter();
  const { setUser } = useAuth();

  const signup = async (fullName, role, email, password) => {
    try {
      if (email === 'admin@gmail.com' && password === 'admin1234') {
        setUser({ role: 'superadmin' });
        router.push('/superadmin');
        return;
      }
      if (email === 'manager@gmail.com' && password === 'manager1234') {
        setUser({ role: 'manager' });
        router.push('/manager');
        return;
      }

      const response = await axios.post('http://your-laravel-app.com/api/signup', {
        fullName,
        role,
        email,
        password,
      });
      const user = response.data;
      setUser(user);
      if (user.role === 'developer') router.push('/developer');
      if (user.role === 'designer') router.push('/designer');
      if (user.role === 'manager') router.push('/manager');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  const signin = async (email, password) => {
    try {
      if (email === 'admin@gmail.com' && password === 'admin1234') {
        setUser({ role: 'superadmin' });
        router.push('/superadmin');
        return;
      }
      if (email === 'manager@gmail.com' && password === 'manager1234') {
        setUser({ role: 'manager' });
        router.push('/manager');
        return;
      }

      const response = await axios.post('http://your-laravel-app.com/api/login', {
        email,
        password,
      });
      const user = response.data;
      setUser(user);
      if (user.role === 'developer') router.push('/developer');
      if (user.role === 'designer') router.push('/designer');
      if (user.role === 'manager') router.push('/manager');
      if (user.role === 'superadmin') router.push('/superadmin');
    } catch (error) {
      console.error('Signin failed', error);
    }
  };

  return { signup, signin };
};
