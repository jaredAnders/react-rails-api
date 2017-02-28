const QuestionListItem = ({question}) => {
  const distractors = question.distractors.map((distractor) => {
    return (
      <span>
        , {distractor}
      </span>
    )
  })

  return (
    <li>
      <p>{question.question_text}</p>
      {/* <p>{question.answer}{distractors}</p> */}
    </li>
  )
}
