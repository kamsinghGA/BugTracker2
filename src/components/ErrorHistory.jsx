import React from "react";

const ErrorHistory = () => {
  // Example mock data for error history
  const errorHistory = [
    { id: 1, message: "Error 1: Unexpected token", date: "2023-07-01" },
    { id: 2, message: "Error 2: Cannot read property", date: "2023-07-15" },
    { id: 3, message: "Error 3: Undefined variable", date: "2023-07-20" }
  ];

  return (
    <div className="error-history">
      <h2>Error History:</h2>
      <ul>
        {errorHistory.map((error) => (
          <li key={error.id}>
            <a href={`/error/${error.id}`}>{error.message}</a> ({error.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorHistory;