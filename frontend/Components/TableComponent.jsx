import React from 'react'

const TableComponent = () => {
  return (
    <div classname="mt-10">
  <h1 classname="text-2xl font-bold mb-4 text-center">User Data Table</h1>
  <div classname="flex justify-center items-center">
    <div classname="overflow-x-auto w-full max-w-4xl">
      <table classname="min-w-full table-auto border border-gray-200 shadow-md rounded-lg">
        <thead classname="bg-gray-100 text-gray-700">
          <tr>
            <th classname="px-4 py-2 border-b">NAME</th>
            <th classname="px-4 py-2 border-b">AGE</th>
            <th classname="px-4 py-2 border-b">EMAIL</th>
          </tr>
        </thead>
        <tbody classname="text-sm text-gray-800">
          <tr classname="hover:bg-gray-50">
            <td classname="px-4 py-2 border-b text-center">Alice</td>
            <td classname="px-4 py-2 border-b text-center">25</td>
            <td classname="px-4 py-2 border-b text-center">
              alice@example.com
            </td>
          </tr>
          <tr classname="hover:bg-gray-50">
            <td classname="px-4 py-2 border-b text-center">Bob</td>
            <td classname="px-4 py-2 border-b text-center">30</td>
            <td classname="px-4 py-2 border-b text-center">
              bob@example.com
            </td>
          </tr>
          <tr classname="hover:bg-gray-50">
            <td classname="px-4 py-2 border-b text-center">Charlie</td>
            <td classname="px-4 py-2 border-b text-center">28</td>
            <td classname="px-4 py-2 border-b text-center">
              charlie@example.com
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
  )
}

export default TableComponent ;
