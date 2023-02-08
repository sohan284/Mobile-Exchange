import React, { Children } from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';

import useAdmin from '../../Hooks/useAdmin';
import Loading from '../../Shared/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading || adminLoading) {
        return (
            <div className='flex justify-center h-screen items-center'>
                <Loading></Loading>
            </div>
        );
    }
    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
};

export default RequireAdmin;