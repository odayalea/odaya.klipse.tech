{
    let state = {
        riddles: [
        {
            question: "הגיל שלי הוא 5 פעמים הגיל שלך. מהו הגיל שלי?",
            correctAnswer: "4",
            isCorrect: false,
            answer: "",
            answered: false,},
        {
            question: "2000+2=?",
            correctAnswer: "2002",
            isCorrect: false,
            answer: "",
            answered: false,}
        ]};

    let submitText = "submit";

    function Answer(props){
        return React.createElement(
                "div",
                {className: "answer-container"},
                [React.createElement("textarea",
                    {
                        className: "answer",
                        value: props.answer,
                        onChange: props.onChange,
                    }),
                React.createElement("button",
                                   {className: "button", onClick: () => props.onClick() },
                                   submitText)]);
    }
    function Question(props){
        return React.createElement(
                "div",
                {className: "question-container"},
                props.question);
    }


    class Game extends React.Component {
        constructor() {
            super();
            this.state = state;
            this.handleAnswerChange = this.handleAnswerChange.bind(this);
        }
        handleAnswerChange(i, e) {
            let answer = e.target.value;
            this.state.riddles[i].answer = answer;
            this.setState(state);
        }
        checkAnswer(i) {
            const state = this.state;
            state.riddles[i].answered = true;
            state.riddles[i].isCorrect = (currentRiddle.answer == currentRiddle.correctAnswer);
            this.setState(state);
        }
        render() {
            return React.createElement(
                    "div",
                    {className: "game"},
                    this.state.riddles.map((riddle, i) => React.createElement(
                            "div",
                        {className: "riddle"},
                            [React.createElement(
                                Question,
                                {
                                    question: riddle.question
                                }),
                            React.createElement(
                                Answer,
                                {
                                    submitText: submitText,
                                    onChange: (e) => this.handleAnswerChange(i,e),
                                    onClick: () => this.checkAnswer(i),
                                })])));
        }
    }

    ReactDOM.render(React.createElement(Game, {}), document.getElementById("container"));


}
