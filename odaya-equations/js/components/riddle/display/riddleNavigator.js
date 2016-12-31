import React, {PropTypes}  from 'react';

const RiddleNavigator = ({onPrevious, onNext, currentRiddle, numRiddles}) => {
    return (
	    <div>
	      <div className="col-lg-4">
  	      <button type="button" className="btn btn-primary btn-lg pull-left" onClick={onNext}>   
	     המשך

	       </button>
	    </div>
	    <div className="col-lg-4">
	    <div className="h1">
	    { (currentRiddle + 1).toString()}/{numRiddles.toString()}
            </div>

	    </div>
	    <div className="col-lg-4">
       	    <button type="button" className="btn btn-primary btn-lg pull-right" onClick={onPrevious}>
	חזרה
	</button>

  	    </div>
	</div>
    )
}

export default RiddleNavigator;
