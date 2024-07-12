"use client";
import React from "react";

const ErrorMessage = ({ error }: { error: Error }) => {
  return (
    <div className="text-center pt-3">
      <p className="text-red-600">Error: {error.message}</p>
    </div>
  );
};

export default ErrorMessage;
