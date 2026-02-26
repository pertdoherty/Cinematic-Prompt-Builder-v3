import React from 'react';

const ControlSection = ({ label, options, value, onChange }) => {
    return (
        <div className="control-group">
            <label className="control-label">{label}</label>
            <select
                className="custom-select"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">Select {label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ControlSection;
