import React, { useState, useEffect } from "react";
import { ArrowUpDown, ChevronDown, Pencil, Trash2, Eye, ChevronLeft, ChevronRight, DollarSign, Users, Receipt } from "lucide-react";

const OrderTable = ({ orders }) => {
  const totalRevenue = orders.reduce((acc, order) => acc + order.total, 0);
  const ordersCount = orders.length;
  const activeSessions = 56;
  const totalSessions = 56;

  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(10); // Default to 10 orders per page
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "date", direction: "ascending" });

  const filters = ["All", "Unfulfilled", "Fulfilled", "Open", "Closed", "Unpaid"];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page whenever the filter changes
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedOrders = [...orders].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const filteredOrders = sortedOrders.filter((order) => {
    if (activeFilter !== "All" && activeFilter !== order.fulfillment) {
      return false;
    }
    if (searchTerm && !order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) && !order.customer.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    const pagination = [];
    if (totalPages <= 5) {
      pagination.push(
        pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-1 border border-gray-300 rounded ${currentPage === number ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "bg-white text-gray-700 hover:bg-gray-50"}`}
            >
              {number}
            </button>
          </li>
        )),
      );
    } else {
      pagination.push(
        <>
          <li key={1}>
            <button
              onClick={() => paginate(1)}
              className={`px-3 py-1 border border-gray-300 rounded ${currentPage === 1 ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "bg-white text-gray-700 hover:bg-gray-50"}`}
            >
              1
            </button>
          </li>
          <li key={2}>
            <button
              onClick={() => paginate(2)}
              className={`px-3 py-1 border border-gray-300 rounded ${currentPage === 2 ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "bg-white text-gray-700 hover:bg-gray-50"}`}
            >
              2
            </button>
          </li>
          <li key="ellipsis1">
            <span className="px-3 py-1">...</span>
          </li>
          <li key={totalPages - 1}>
            <button
              onClick={() => paginate(totalPages - 1)}
              className={`px-3 py-1 border border-gray-300 rounded ${currentPage === totalPages - 1 ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "bg-white text-gray-700 hover:bg-gray-50"}`}
            >
              {totalPages - 1}
            </button>
          </li>
          <li key={totalPages}>
            <button
              onClick={() => paginate(totalPages)}
              className={`px-3 py-1 border border-gray-300 rounded ${currentPage === totalPages ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "bg-white text-gray-700 hover:bg-gray-50"}`}
            >
              {totalPages}
            </button>
          </li>
        </>,
      );
    }
    return pagination;
  };

  return (
    <>
      <div className="flex items-center justify-between space-x-4 mb-4">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search by OrderCode or Customer"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full sm:w-1/2 lg:w-1/3"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* Total Revenue */}
        <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col justify-between">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <div>
                <p className="text-xl font-semibold">{totalRevenue}₫</p>
                <h2 className="text-base font-normal mt-2">Total Revenue</h2>
              </div>
              <div className="flex items-center">
                <span className="text-green-500">22.45% ↑</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-[#ecf2ff] rounded-full w-16 h-16 flex items-center justify-center">
                <DollarSign size={20} color="#CA5E5E" />
              </div>
            </div>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col justify-between">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <div>
                <p className="text-xl font-semibold">{ordersCount}</p>
                <h2 className="text-base font-normal mt-2">Orders</h2>
              </div>
              <div className="flex items-center">
                <span className="text-green-500">22.45% ↑</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-[#ecf2ff] rounded-full w-16 h-16 flex items-center justify-center">
                <Receipt size={20} color="#CA5E5E" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white shadow-sm rounded-lg">
        <div className="grid grid-cols-5">
          <div className="col-span-2 flex justify-between items-center bg-gray-100 p-1 rounded-lg shadow-sm">
            {filters.map((filter) => (
              <button key={filter} className={`px-3 py-1 rounded-md ${activeFilter === filter ? "bg-white text-black shadow-md" : "text-gray-500"}`} onClick={() => handleFilterChange(filter)}>
                {filter}
              </button>
            ))}
          </div>
          <div className="col-start-4 col-span-2"></div>
          <div></div>
        </div>
        <table className="min-w-full table-auto mt-10">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-4 cursor-pointer" onClick={() => handleSort("orderId")}>
                Order
              </th>
              <th className="text-left py-2 px-4 cursor-pointer" onClick={() => handleSort("date")}>
                Date
                <ArrowUpDown size={18} className=" inline-block ml-3 opacity-50" style={{ "margin-bottom": "4px" }} />
              </th>
              <th className="text-left py-2 px-4">Customer</th>
              <th className="text-left py-2 px-4">Payment</th>
              <th className="text-left py-2 px-4 cursor-pointer" onClick={() => handleSort("total")}>
                Total
                <ArrowUpDown size={18} className=" inline-block ml-3 opacity-50" style={{ "margin-bottom": "4px" }} />
              </th>
              <th className="text-left py-2 px-4">Delivery</th>
              <th className="text-left py-2 px-4">Items</th>
              <th className="text-left py-2 px-4">Fulfillment</th>
              <th className="text-left py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{order.orderId}</td>
                <td className="py-2 px-4">{order.date}</td>
                <td className="py-2 px-4">{order.customer}</td>
                <td className="py-2 px-4">
                  <span className={`shadow-sm px-2 py-1 rounded-full text-sm ${order.payment === "Success" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}`}>{order.payment}</span>
                </td>
                <td className="py-2 px-4">${order.total}</td>
                <td className="py-2 px-4">{order.delivery}</td>
                <td className="py-2 px-4">{order.items} items</td>
                <td className="py-2 px-4">
                  <span className={`shadow-sm px-2 py-1 rounded-full text-sm ${order.fulfillment === "Fulfilled" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {order.fulfillment}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <button className="bg-white hover:bg-gray-50 text-[#7D4600] hover:text-indigo-900 py-1 px-2 border border-gray-200 rounded shadow">
                    <Eye className="h-5 w-5 hover:opacity-85" />
                  </button>
                  <button className="ml-4 bg-white hover:bg-gray-50 text-indigo-600 hover:text-indigo-900 py-1 px-2 border border-gray-200 rounded shadow">
                    <Pencil className="h-5 w-5 opacity-55 hover:opacity-85" />
                  </button>
                  <button className="ml-4 bg-white hover:bg-gray-50 text-red-600 hover:text-red-900 py-1 px-2 border border-gray-200 rounded shadow">
                    <Trash2 className="h-5 w-5 opacity-55 hover:opacity-85" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Showing ? of ? data */}
        <div className="mt-4 text-sm text-gray-700">
          Showing {indexOfFirstOrder + 1} to {indexOfLastOrder > filteredOrders.length ? filteredOrders.length : indexOfLastOrder} of {filteredOrders.length} entries
        </div>
        {/* Pagination and rows per page dropdown */}
        <div className="flex justify-between items-center mt-4">
          {/* Rows per page dropdown */}
          <div className="flex items-center">
            <span className="mr-2">Rows per page:</span>
            <select
              value={ordersPerPage}
              onChange={(e) => {
                setOrdersPerPage(parseInt(e.target.value));
                setCurrentPage(1);
              }}
              className="focus:outline-none px-2 py-1 border border-gray-300 rounded"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          {/* Pagination controls */}
          <nav className="block">
            <ul className="flex pl-0 rounded list-none flex-wrap">
              <li>
                <button onClick={() => paginate(currentPage - 1)} className="mr-3 px-3 py-1 border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50" disabled={currentPage === 1}>
                  <ChevronLeft color="#a8a5a5" />
                </button>
              </li>
              {renderPagination()}
              <li>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  className="ml-3 px-3 py-1 border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50"
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight color="#a8a5a5" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default OrderTable;
