import React, {PropTypes}  from 'react';
import TextInput from '../../common/TextInput.js';
import RiddleScore from '../display/riddleScore.js';

const RiddleForm = ({question, answer, correct, trials, onChange, onSubmit, currentRiddle, numRiddles, onNext, onPrevious, score}) => {
    if (trials != undefined) {
	trials = trials.toString();
    }
    return (
    <div>
   	    <div className="row h3 stage">
	    { (currentRiddle + 1).toString()}/{numRiddles.toString()}
            </div>
	    <div className="row h1 question">
	    { question}
            </div>
	    <div className="row">
	    <RiddleScore score={score}/>
	    <div className="col-lg-1">
	    <button type="button" className="btn btn-primary btn-lg" onClick={onNext}>&gt;</button>
	    </div>
 <div className="col-lg-1">    
	      <button type="button" className="btn btn-primary btn-lg" onClick={onSubmit}>	     	      הגש
        </button>
	    </div>
              <div className="col-lg-5 answer">
	           <TextInput label="" value= {answer} name="answer" placeholder="תחשוב טוב לפני שאתה עונה" onChange= {onChange} correct={correct}/>
	      </div>
	     
	    <div className="col-lg-1">    
       	    <button type="button" className="btn btn-primary btn-lg" onClick={onPrevious}>&lt; </button>
	    </div>
	    </div>
	</div>
    )
}

export default RiddleForm;
