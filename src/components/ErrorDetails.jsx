import React from "react";
import { useParams } from "react-router-dom";

const ErrorDetails = () => {
  const { id } = useParams();

  // Example mock data for error details
  const errorDetails = {
    id,
    message: "Error 1: Unexpected token",
    description: "An unexpected token was found in the code...",
    solution: "To fix this error, check for syntax errors..."
  };

  return (
    <div className="error-details">
      <h2>Error Details:</h2>
      <h3>{errorDetails.message}</h3>
      <p>{errorDetails.description}</p>
      <p>Solution: {errorDetails.solution}</p>
    </div>
  );
};

export default ErrorDetails;