
import React, { useState } from "react";

function Exam() {
    // const [showResults, setShowResults] = useState(false);
    // const [currentQuestion, setCurrentQuestion] = useState(0);
    // const [score, setScore] = useState(0);

    // const questions = [
    //     {
    //         text: "سوال یک",
    //         options: [
    //             { id: 0, text: "گزینه یک", isCorrect: false },
    //             { id: 1, text: "گزینه دو", isCorrect: false },
    //             { id: 2, text: "گزینه سه", isCorrect: false },
    //             { id: 3, text: "گزینه چهار", isCorrect: true },
    //         ],
    //     },
    //     {
    //         text: "سوال دو",
    //         options: [
    //             { id: 0, text: "گزینه یک", isCorrect: false },
    //             { id: 1, text: "گزینه دو", isCorrect: false },
    //             { id: 2, text: "گزینه سه", isCorrect: false },
    //             { id: 3, text: "گزینه چهار", isCorrect: true },
    //         ],
    //     },
    //     {
    //         text: "سوال سه",
    //         options: [
    //             { id: 0, text: "گزینه یک", isCorrect: false },
    //             { id: 1, text: "گزینه دو", isCorrect: false },
    //             { id: 2, text: "گزینه سه", isCorrect: false },
    //             { id: 3, text: "گزینه چهار", isCorrect: true },
    //         ],
    //     },
    //     {
    //         text: "سوال چهار",
    //         options: [
    //             { id: 0, text: "گزینه یک", isCorrect: false },
    //             { id: 1, text: "گزینه دو", isCorrect: false },
    //             { id: 2, text: "گزینه سه", isCorrect: false },
    //             { id: 3, text: "گزینه چهار", isCorrect: true },
    //         ],
    //     },
    // ];
    // const optionClicked = (isCorrect) => {
    //     if (isCorrect) {
    //         setScore(score + 1);
    //     }
    //     if (currentQuestion + 1 < questions.length) {
    //         setCurrentQuestion(currentQuestion + 1);
    //     } else {
    //         setShowResults(true);
    //     }
    // };
    // return (
    //     <div className="App">
    //         {showResults ? (
    //             <div className="final-results">
    //                 <h1>پایان آزمون</h1>
    //             </div>
    //         ) : (
    //             <div className="question-card">
    //                 <h2>
    //                     سوال: {currentQuestion + 1} از {questions.length}
    //                 </h2>
    //                 <h3 className="question-text">{questions[currentQuestion].text}</h3>
    //                 <ul>
    //                     {questions[currentQuestion].options.map((option) => {
    //                         return (
    //                             <li
    //                                 key={option.id}
    //                                 onClick={() => optionClicked(option.isCorrect)}
    //                             >
    //                                 {option.text}
    //                             </li>
    //                         );
    //                     })}
    //                 </ul>
    //             </div>
    //         )}
    //     </div>
    // );
    const [addFild,setAddFild] = useState(false)
    const add = () => {
        setAddFild(true)
    }
    return(
        <>
        <button onClick={add}>
            add
        </button>
        {
            addFild ? 
            <>asdasdasd</>
            :null
        }
        </>
    )
}

export default Exam;


