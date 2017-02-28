class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.updateQuestions = this.updateQuestions.bind(this);
  }

  componentDidMount() {
    $.getJSON('/questions', (response) => { this.setState({ questions: response }) });
  }

  handleSubmit(question) {
    const newState = this.state.questions.concat(question);
    this.setState({ questions: newState });
  }

  onUpdate(question) {
    $.ajax({
      url: `/questions/${question.id}`,
      type: 'PUT',
      data: { question },
      success: () => {
        this.updateQuestions(question);
      }
    })
  }

  updateQuestions(question) {
    const questions = this.state.questions.filter((i) => { return i.id != question.id });
    questions.push(question);

    this.setState({ questions });
  }

  render() {
    return (
      <div>
        <NewQuestion handleSubmit={this.handleSubmit}/>
        <QuestionList questions={this.state.questions} onUpdate={this.onUpdate} />
      </div>
    )
  }
}
