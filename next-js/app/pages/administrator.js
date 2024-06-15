import useProtectedRoute from '../hooks/useProtectedRoute';

const AdministratorPage = () => {
    useProtectedRoute('administrator');

    return <div>Welcome, administrator!</div>;
};

export default AdministratorPage;
