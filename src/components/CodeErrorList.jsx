import React from "react";

const CodeErrorList = () => {
  // Example mock data for code errors
  const codeErrors = [
    { id: 1, message: "Error 1: Unexpected token" },
    { id: 2, message: "Error 2: Cannot read property" },
    { id: 3, message: "Error 3: Undefined variable" }
  ];

  return (
    <div className="code-error-list">
      <h2>Code Errors:</h2>
      <ul>
        {codeErrors.map((error) => (
          <li key={error.id}>
            <a href={`/error/${error.id}`}>{error.message}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodeErrorList;
