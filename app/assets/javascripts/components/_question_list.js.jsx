const QuestionList = (props) => {
  const questions = props.questions.map((question) => {
    return (
      <QuestionListItem
        key={question.id}
        question={question} />
    )
  })

  return (
    <ul>
      {questions}
    </ul>
  )

}
