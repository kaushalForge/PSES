import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg max-w-md w-full p-8 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome to Admin
        </h1>
        <p className="text-gray-600">
          Manage your application settings, users, and data here.
        </p>
      </div>
    </div>
  );
};

export default page;
