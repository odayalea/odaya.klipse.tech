import React, {PropTypes} from 'react';

const errors = ["תחשבי עוד קצת...😏",
                "באמת,ציפיתי ליותר!!!!😠",
                "איזה גרועה….😱",
                "לא נורא, נסי שוב😜",
                "מטעויות לומדים… תנסי עוד פעם!😘",
                "מה?! זה היה ממש קל!😩",
                "איך טעית בזה?! זה היה ממש קל!😪",
               ];
const bravos = [
    "וואי איזה אדירה את!!😁",
    "את ממש חכמה!😉",
    "מצויין:)😃",
    "עלי והצליחי!😊",
    "כל הכבוד😁",

];

let randomElem = (items) =>  items[Math.floor(Math.random()*items.length)];

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
            {correct == false && <div className="h2 alert alert-danger">{randomElem(errors)}</div>}
	{correct == true && <div className="h2 alert alert-success">{randomElem(bravos)}</div>}
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

