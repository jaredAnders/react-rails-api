class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $.getJSON('/questions', (response) => { this.setState({ questions: response }) });
  }

  handleSubmit(question) {
    const newState = this.state.questions.concat(question);
    this.setState({ questions: newState });
  }

  render() {
    return (
      <div>
        <NewQuestion handleSubmit={this.handleSubmit}/>
        <QuestionList questions={this.state.questions} />
      </div>
    )
  }
}
