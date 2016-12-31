import React, {PropTypes}  from 'react';
import TextInput from '../../common/TextInput.js';

const RiddleForm = ({question, answer, correct, trials, onChange, onSubmit}) => {
    if (trials != undefined) {
	trials = trials.toString();
    }
    return (
	<div>
	    <div className="h1 question">
	    { question}
	</div>
            <div className="submit-btn col-lg-2">
	       <button type="button" className="btn btn-primary btn-lg" onClick={onSubmit}>	    	    הגש
	       </button>
	    </div>


	    <div className="col-lg-10">
	    <TextInput label="" value= {answer} name="answer" placeholder="תחשוב טוב לפני שאתה עונה" onChange= {onChange} correct={correct}>
	      </TextInput>
	    </div>
	</div>
    )
}

export default RiddleForm;
