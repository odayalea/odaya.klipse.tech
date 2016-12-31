import React, {PropTypes}  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userStateActions from '../../../actions/userStateActions.js';
import RiddleForm from '../display/riddleForm.js';
import RiddleNavigator from '../display/riddleNavigator.js';

class RiddleContainer extends React.Component {
    constructor() {
	super();
	this.state = {};
	this.onPrevious = this.onPrevious.bind(this);
	this.onNext = this.onNext.bind(this);
	this.onChange = this.onChange.bind(this);
	
    }
    onPrevious() {
	console.log("onPrevious: ", this.props);
	if(this.props.currentRiddle > 0) {
            this.props.userStateActions.previousRiddle();
	}
    }
    onNext() {
	if(this.props.currentRiddle + 1 < this.props.numRiddles) {
	    this.props.userStateActions.nextRiddle();
	}
    }
    onChange(event) {
	const answer = event.target.value;
	let state = {};
	let riddleData = this.state[this.props.currentRiddle] || {answer: ""};
	riddleData.answer = answer;
	if (answer == "") {
	    riddleData.correct = undefined;
	}
	state[this.props.currentRiddle] = riddleData;
	this.setState(state);
	console.log("state:", this.state);
    }
    checkAnswer() {
	const currentRiddle = this.props.currentRiddle;
	let state = this.state[currentRiddle];
        state.correct = (this.props.riddle.answer == state.answer);
	if (state.trials == undefined) {
	    state.trials = 0;
	}
	state.trials = state.trials + 1;
	const newState = {};
	newState[currentRiddle] = state;
	this.setState(newState);
	console.log("state:", this.state);	
    }
    render() {
	const riddleData = this.state[this.props.currentRiddle] || {answer: ""};
	return (
		<div>
		<RiddleForm question={this.props.riddle.question} answer={riddleData.answer} onChange={this.onChange} onSubmit = {() => this.checkAnswer()} correct = {riddleData.correct} trials={riddleData.trials}/>
		<RiddleNavigator onPrevious={this.onPrevious} onNext={this.onNext} currentRiddle= {this.props.currentRiddle} numRiddles={this.props.numRiddles}/>
		</div>
	)
    }
}

function mapStateToProps(state, ownProps) {
    console.log("state:", state);
    const currentRiddle = state.userState.currentRiddle;
    return {
	riddle: state.riddles[currentRiddle],
	currentRiddle,
	numRiddles: state.riddles.length,
    };
}

function mapDispatchToProps(dispatch) {
    return {
	userStateActions: bindActionCreators(userStateActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RiddleContainer);

