// QuestionComponent.js

import React from "react";
import CheckboxQuestion from "./questionType/CheckboxQuestion";

const QuestionComponent = ({ question }) => {
    console.log("question from question component",question)
    return (
        <div>
            <CheckboxQuestion
                question={question.question}
                answers={question.answers}
            />
        </div>
    );
};

export default QuestionComponent;
