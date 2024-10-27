import React from 'react';

interface TextBoxProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextBox: React.FC<TextBoxProps> = ({ label, value, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <input type="text" value={value} onChange={onChange} />
        </div>
    );
};

export default TextBox;  // Exporting the TextBox component
