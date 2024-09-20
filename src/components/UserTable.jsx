import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

const UserTable = ({ columns, data }) => {
  const [tableState, setTableState] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    pageCount: Math.ceil(data.length / tableState.pageSize),
    state: {
      pagination: tableState,
    },
    onPaginationChange: setTableState,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const { getHeaderGroups, getRowModel, getPageCount } = table;

  // Handle page size change
  const handlePageSizeChange = (e) => {
    const newSize = Number(e.target.value);
    setTableState((prev) => ({
      ...prev,
      pageSize: newSize,
      pageIndex: 0, 
    }));
  };

  return (
    <div className="container mx-auto p-0">
      {/* Table */}
      <table className="table-auto w-full bg-white overflow-hidden">
        <thead className="bg-purple-100 text-gray-700">
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-4 text-left text-sm font-semibold"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getIsSorted()
                    ? header.column.getIsSorted() === "desc"
                      ? " 🔽"
                      : " 🔼"
                    : ""}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b hover:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4 text-sm text-gray-700">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-4">
        <div className="mr-4">
          <label htmlFor="pageSize" className="mr-2 text-sm">
            Rows per page:
          </label>
          <select
            id="pageSize"
            value={tableState.pageSize}
            onChange={handlePageSizeChange}
            className="border rounded p-1 text-sm"
          >
            {[5, 10, 20, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <span className="text-sm mr-4">
          Page{" "}
          <strong>
            {tableState.pageIndex + 1} of {getPageCount()}
          </strong>
        </span>
        <div className="flex space-x-2">
          <button
            onClick={() => table.setPageIndex(tableState.pageIndex - 1)}
            disabled={!table.getCanPreviousPage()}
            className="px-4 py-2 bg-gray-200 rounded-lg text-sm flex items-center"
          >
            &lt;
          </button>
          <button
            onClick={() => table.setPageIndex(tableState.pageIndex + 1)}
            disabled={!table.getCanNextPage()}
            className="px-4 py-2 bg-gray-200 rounded-lg text-sm flex items-center"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
