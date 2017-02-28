class NewQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    const question = this.refs.question.value;
    const answer = this.refs.answer.value;
    const distractors = this.refs.distractors.value.split(',').map((distractor) => {return parseInt(distractor.trim(), 10)});
    // console.log(distractors);
    $.ajax({
      url: '/questions',
      type: 'POST',
      data: {
        question: {
          question_text: question,
          answer: answer,
          distractors: distractors
        }
      }
    });
  }

  render() {
    return (
      <div>
        <input ref='question' placeholder='question' />
        <input ref='answer' placeholder='answer' />
        <input ref='distractors' placeholder='distractor 1, distractor 2, ...' />
        <br/>
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    )
  }
}
