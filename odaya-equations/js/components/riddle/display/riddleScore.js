import React, {PropTypes}  from 'react';

const RiddleScore = ({score}) => {
    let {correct, incorrect, unanswered, total} = score;
    return (
	    
	    <div className="h1 score col-lg-3">
	    ניקוד:  { correct.toString()}/{total.toString()}
              </div>
	    
    )
}

export default RiddleScore;
