import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const NavigationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

export const LogoContainer = styled(Link)`
    text-decoration: none;
    height: 100%;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavLinkContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const NavLink = styled(Link)`
    cursor: pointer;
    padding: 0 15px;
`;

// .navigation {
// width: 100%;
// display: flex;
// justify-content: space-between;
// align-items: center;
// padding: 2rem 0;

//     .logo-container {
// text-decoration: none;
// height: 100%;
// width: 70px;
// display: flex;
// justify-content: center;
// align-items: center;
//     }
//     .nav-links-container {
// width: 50%;
// height: 100%;
// display: flex;
// align-items: center;
// justify-content: flex-end;
//     }
//     .nav-links {
// cursor: pointer;
// padding: 0 15px;
//     }
// }
