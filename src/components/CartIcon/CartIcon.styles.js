import styled from 'styled-components';
import { ReactComponent as ShoppingBag } from '../../assets/bag.svg';

export const ShoppingBagIcon = styled(ShoppingBag)`
    height: 25px;
    width: 25px;
`;

export const CartIconContainer = styled.div`
    height: 45px;
    width: 45px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ItemCount = styled.span`
    position: absolute;
    bottom: 12px;
    font-size: 10px;
    font-weight: bold;
`;

// .cart-icon-container {
// height: 45px;
// width: 45px;
// position: relative;
// display: flex;
// justify-content: center;
// align-items: center;
// cursor: pointer;

//     .icon-shopping {
// height: 25px;
// width: 25px;
//     }

//     .item-count {
// position: absolute;
// bottom: 12px;
// font-size: 10px;
// font-weight: bold;
//     }
// }
