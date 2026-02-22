import React from "react";

const TableComponent = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">
        User Data Table
      </h1>

      <div className="flex justify-center items-center">
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="min-w-full table-auto border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 border-b">NAME</th>
                <th className="px-4 py-2 border-b">AGE</th>
                <th className="px-4 py-2 border-b">EMAIL</th>
              </tr>
            </thead>

            <tbody className="text-sm text-gray-800">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b text-center">Alice</td>
                <td className="px-4 py-2 border-b text-center">25</td>
                <td className="px-4 py-2 border-b text-center">
                  alice@example.com
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b text-center">Bob</td>
                <td className="px-4 py-2 border-b text-center">30</td>
                <td className="px-4 py-2 border-b text-center">
                  bob@example.com
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b text-center">Charlie</td>
                <td className="px-4 py-2 border-b text-center">28</td>
                <td className="px-4 py-2 border-b text-center">
                  charlie@example.com
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
