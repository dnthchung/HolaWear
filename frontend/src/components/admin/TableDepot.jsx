import React, { useState, useEffect } from "react";
import { format, parseISO, compareAsc, set } from "date-fns";

const TableDepot = ({ depotData, productData }) => {
  const [sortColumn, setSortColumn] = useState("createdAt");
  const [sortDirection, setSortDirection] = useState("desc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const filteredData = depotData.filter((depot) => {
    const product = productData.find((p) => p._id === depot.productId);
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const sortedData = filteredData.sort((a, b) => {
    const dateA = parseISO(a.createdAt);
    const dateB = parseISO(b.createdAt);
    return sortDirection === "asc" ? compareAsc(dateA, dateB) : compareAsc(dateB, dateA);
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <input type="text" placeholder="Search by product name..." value={searchTerm} onChange={handleSearch} className="px-4 py-2 border rounded" />
        <div>
          <button className={`px-4 py-2 border rounded ${sortColumn === "createdAt" && sortDirection === "asc" ? "bg-gray-200" : ""}`} onClick={() => handleSort("createdAt")}>
            Sort by Date {sortColumn === "createdAt" && sortDirection === "asc" ? "▲" : "▼"}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden">Product ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Import Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Import Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
            </tr>
          </thead>
          {/* body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((depot) => {
              const product = productData.find((p) => p._id === depot.productId);
              if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return (
                  <tr key={depot._id}>
                    <td className="px-6 py-4 whitespace-nowrap hidden">
                      <div className="text-sm text-gray-900 ">{depot.productId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{product.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{depot.importPrice} vnd</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{depot.stock}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{depot.importTotal} vnd</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{format(parseISO(depot.createdAt), "HH:mm:ss dd-MM-yyyy")}</div>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button key={page} className={`px-4 py-2 border rounded ${page === currentPage ? "bg-gray-200" : ""}`} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TableDepot;
