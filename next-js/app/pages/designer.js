import useProtectedRoute from '../hooks/useProtectedRoute';

const DesignerPage = () => {
    useProtectedRoute('designer');

    return <div>Welcome, Designer!</div>;
};

export default DesignerPage;
