class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions:[]
    }
  }

  componentDidMount() {
    $.getJSON('/questions', (response) => { this.setState({ questions: response }) });
  }

  render() {
    return (
      <div>
        <QuestionList questions={this.state.questions} />
      </div>
    )
  }
}
