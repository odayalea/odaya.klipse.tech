import React, {PropTypes} from 'react';

const error = "תחשוב עוד קצת...";
const bravo = "כל הכבוד!";

const TextInput = ({name, label, onChange, placeholder, value, correct}) => {
    let wrapperClass = 'form-group';
    if (correct === false) {
        wrapperClass += " " + 'has-error';
    }
    if (correct === true) {
        wrapperClass += " " + 'has-success';
    }

    return (

        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value || ''}
                    onChange={onChange}/>
                        {correct == false && <div className="alert alert-danger">{error}</div>}
	                {correct == true && <div className="alert alert-success">{bravo}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;

