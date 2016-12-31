import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOption, addDefaultOption, value, error, options}) => {

    addDefaultOption = addDefaultOption!=null ? addDefaultOption : true;

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-control">
                    {addDefaultOption ? <option value="">{defaultOption}</option> : null}
                    {options.map((option) => {
                        return <option key={option.value} value={option.value}>{option.text}</option>;
                    })}
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    addDefaultOption: PropTypes.bool,
    value: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
