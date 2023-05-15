import React, { ChangeEvent } from 'react';

interface Props {
    value: string;
    onChange: (value: string) => void;
    type?: string
}

const Input = (props: Props) => {
    const {
        value,
        onChange,
        type = "text"
    } = props
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <input type={type} value={value} onChange={handleChange} />
    );
};

export default Input
