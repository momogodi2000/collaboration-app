import useProtectedRoute from '../hooks/useProtectedRoute';

const ManagerPage = () => {
    useProtectedRoute('manager');

    return <div>Welcome, Project Manager!</div>;
};

export default ManagerPage;
