import styled from 'styled-components';
import { BaseButton, InvertedButton } from '../Button/Button.style';

export const CartDropdownContainer = styled.div`
    max-height: 340px;
    width: 240px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 90px;
    right: 40px;
    background: white;
    z-index: 5;
    border: 1px solid black;

    ${BaseButton}, ${InvertedButton} {
        width: 100%;
    }
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItems = styled.div`
    height: 240px;
    overflow-y: auto;
    text-align: center;
`;

// .cart-dropdown-container {
// max-height: 340px;
// width: 240px;
// padding: 20px;
// display: flex;
// flex-direction: column;
// position: absolute;
// top: 90px;
// right: 40px;
// background: white;
// z-index: 5;
// border: 1px solid black;

//     .empty-message {
// font-size: 18px;
// margin: 50px auto;
//     }

//     .cart-items {
// height: 240px;
// overflow-y: auto;
// text-align: center;
//     }

//     button {
//         width: 100%;
//     }
// }
