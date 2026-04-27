import NavBar from '@/components/shared/NavBar';
import { montserrat } from '@/app/layout';

import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
            <NavBar>
            </NavBar>
            {children}
            
        </div>
    );
};

export default AuthLayout;