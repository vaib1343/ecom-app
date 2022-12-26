import React, { Fragment } from 'react';
import { Group, FormInput, FormInputLabel } from './FormInput.styles';

const FormInputField = ({ label, name, ...remainingProps }) => {
    return (
        <Group>
            <FormInput {...remainingProps} name={name} />
            {label && (
                <FormInputLabel shrink={remainingProps.value.length} htmlFor={name}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};

export default FormInputField;
