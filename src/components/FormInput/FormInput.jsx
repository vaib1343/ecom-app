import React, { Fragment } from 'react';
import './FormInput.scss';

const FormInput = ({ label, name, ...remainingProps }) => {
    return (
        <div className='group'>
            <input className='form-input' {...remainingProps} name={name} />
            {label && (
                <label className={`${remainingProps.value.length ? 'shrink' : ''} form-input-label`} htmlFor={name}>
                    {label}
                </label>
            )}
        </div>
    );
};

export default FormInput;
