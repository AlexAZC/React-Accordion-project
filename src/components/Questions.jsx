import { SingleQuestion } from "./SingleQuestion"

export const Questions = ({questions}) => {
    const displayQuestions = questions.map((theme) => {
        return(
            <SingleQuestion key={theme.id} {...theme}  />
        )
    } )
  return (
        <section className="container" >
            <h1>Questions</h1>
            {displayQuestions}

        </section>
  )
}