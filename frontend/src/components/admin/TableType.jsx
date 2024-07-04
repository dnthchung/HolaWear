import { useState } from "react";
import { format, parseISO } from "date-fns";
import { Pencil } from "lucide-react";

const TableType = ({ typesData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (formData) => {
    // Handle form submission (e.g., API call)
    console.log("Form submitted successfully:", formData);
  };

  const filteredTypes = typesData.filter((type) => type.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-4">
      <div className="flex items-center justify-between space-x-4 mb-4">
        <input type="text" placeholder="Search by type name" value={searchTerm} onChange={handleSearchChange} className="px-4 py-2 border rounded-lg w-full sm:w-1/2 lg:w-1/3" />
      </div>
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Created Date</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTypes.map((type) => (
              <tr key={type.id}>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{type.name}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{type.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${type.status === true ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {type.status === true ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">{type.createdAt && <div className="text-sm text-gray-900">{format(parseISO(type?.createdAt), "HH:mm:ss dd-MM-yyyy")}</div>}</td>
                <td className="px-6 py-4 text-sm font-medium flex justify-center">
                  <button className="ml-4 bg-white hover:bg-gray-50 text-[#6E44FF] hover:text-indigo-900 py-1 px-2 border border-gray-200 rounded shadow">
                    <Pencil className="h-5 w-5 opacity-55 hover:opacity-85" />
                  </button>

                  {type.status === true && (
                    <button className="ml-4 bg-white hover:bg-gray-50 text-red-600 hover:text-red-900 py-1 px-2 border border-gray-200 rounded shadow">
                      <p className="text-sm">Inactive</p>
                    </button>
                  )}
                  {type.status === false && (
                    <button className="ml-4 bg-white hover:bg-gray-50 text-green-600 hover:text-green-900 py-1 px-2 border border-gray-200 rounded shadow">
                      <p className="text-sm">Active</p>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
// không cho phép submit nếu như màu sắc nào đó có các size đều = 0 (tức là không có sản phẩm, hiện alert thông báo thừa màu sắc

export default TableType;
