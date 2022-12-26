// import './Navigation.scss';
import { NavigationContainer, LogoContainer, NavLinkContainer, NavLink } from './Navigation.styles';
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
            <NavigationContainer>
                <LogoContainer to='/'>
                    <div>
                        <img src='/crown.svg' />
                    </div>
                </LogoContainer>
                <NavLinkContainer>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {/* <Link className='nav-links' to='/shop'>
                        SHOP
                    </Link> */}
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutHandler}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    )}
                    <div onClick={handleCart}>
                        <CartIcon />
                    </div>
                </NavLinkContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
