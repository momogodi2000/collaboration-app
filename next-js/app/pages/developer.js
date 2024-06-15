import useProtectedRoute from '../hooks/useProtectedRoute';

const DeveloperPage = () => {
    useProtectedRoute('developer');

    return <div>Welcome, Developer!</div>;
};

export default DeveloperPage;
