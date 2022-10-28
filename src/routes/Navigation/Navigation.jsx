import './Navigation.scss';
import React, { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { SignOutUser } from '../../utils/firebase/firebaseUtils';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import { CartContext } from '../../context/cartContext';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const signOutHandler = async () => {
        await SignOutUser();
    };

    const handleCart = () => {
        setIsCartOpen(!isCartOpen);
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
                    <div onClick={handleCart}>
                        <CartIcon />
                    </div>
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
