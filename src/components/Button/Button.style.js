import styled from 'styled-components';

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Hebrew Condensed', sans-serif;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: 100ms all ease-in;

    &:hover {
        background-color: white;
        color: white;
        border: 1px solid black;
        color: black;
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;


// .button-container {
// min-width: 165px;
// width: auto;
// height: 50px;
// letter-spacing: 0.5px;
// line-height: 50px;
// padding: 0 35px;
// font-size: 15px;
// background-color: black;
// color: white;
// text-transform: uppercase;
// font-family: 'Open Sans Hebrew Condensed', sans-serif;
// font-weight: bolder;
// border: none;
// cursor: pointer;
// display: flex;
// justify-content: center;
// transition: 100ms all ease-in;

// &:hover {
//     background-color: white;
//     color: white;
//     border: 1px solid black;
//     color: black;
// }

//     &.inverted {
// background-color: white;
// color: black;
// border: 1px solid black;

// &:hover {
//     background-color: black;
//     color: white;
//     border: none;
// }
//     }
// }
