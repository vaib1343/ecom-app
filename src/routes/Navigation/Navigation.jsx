import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div className=''><img src='/crown.svg'/></div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-links' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-links' to='/auth'>
                        SIGNIN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
