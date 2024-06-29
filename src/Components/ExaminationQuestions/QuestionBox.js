import React from 'react';

const QuestionBox = ({ children }) => {
    const questionBoxStyle = {
        border: "1px solid black",
        padding: "20px", // Increased padding for a bigger box
        fontSize: "16px", // Bigger font size for the content
        marginTop: "20px", // This will push the box a bit lower
        width: "300px",
        height: "400px",
    };

    return (
        <div style={questionBoxStyle}>
            {children}
        </div>
    );
};

export default QuestionBox;
