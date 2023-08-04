import { useState } from "react";
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";

export const SingleQuestion = ({title,info}) => {
   const [showAll, setShowAll] = useState(false)
  return (
    <article className="question">
        <header>
            <h5>{title}</h5>
            <button className="question-btn" onClick={() => setShowAll(!showAll)}>
                {showAll ? <AiOutlineMinus/> : <AiOutlinePlus /> }
            </button>
        </header>
       {showAll && <p>{info}</p>} 
    </article>
  )
}