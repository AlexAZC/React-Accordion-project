import { useState } from "react";
import questions from "./data";
import { Questions } from "./components/Questions";



const App = () => {
   const [quest, setQuest] = useState(questions)

  return (<main>
        <Questions questions={quest} />

  </main>);
};
export default App;
