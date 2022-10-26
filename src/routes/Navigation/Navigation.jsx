import './Navigation.scss';
import React, { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { SignOutUser } from '../../utils/firebase/firebaseUtils';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await SignOutUser();
    };
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div className=''>
                        <img src='/crown.svg' />
                    </div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-links' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className='nav-links' onClick={signOutHandler}>
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className='nav-links' to='/auth'>
                            SIGNIN
                        </Link>
                    )}
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
