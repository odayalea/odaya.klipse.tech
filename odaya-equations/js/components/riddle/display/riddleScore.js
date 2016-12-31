import React, {PropTypes}  from 'react';

const RiddleScore = ({correct, incorrect, unanswered, total}) => {
    return (
	    <div>
	      <div className="col-lg-1 col-lg-offset-4">
	      { (correct).toString()}/{total.toString()}
              </div>
	    </div>
    )
}

export default RiddleScore;
