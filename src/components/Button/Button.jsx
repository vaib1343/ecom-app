import React from 'react';
import { BaseButton, InvertedButton } from './Button.style.js';

const BUTTON_TYPE_CLASSES = {
    default: 'default',
    inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.default) => ({
    [BUTTON_TYPE_CLASSES.default]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
}[buttonType])

const Button = ({ children, buttonType, ...otherProps }) => {
    let CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>
    // if (buttonType == 'inverted') {
    //     button = <InvertedButton {...otherProps}>{children}</InvertedButton>;
    // } else {
    //     button = <BaseButton {...otherProps}>{children}</BaseButton>;
    // }
    // return button;
};

export default Button;
