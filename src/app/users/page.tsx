import React from "react";

const Users = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return (
    <div className="w-screen h-screen bg-gray-200 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 px-3 py-2">
      {users.map((user: any) => (
        <div className="max-w-sm h-auto rounded overflow-hidden shadow-lg bg-gray-100">
          <div className="px-6 py-4" key={user.id}>
            <div className="font-bold text-xl mb-2">{user.name}</div>
            <p className="text-gray-700 text-base">{user.username}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {user.email}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {user.phone}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {user.website}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
