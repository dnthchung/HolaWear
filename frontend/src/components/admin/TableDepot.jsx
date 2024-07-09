import React from "react";
import { format, parseISO } from "date-fns";

const TableDepot = ({ depotData, productData }) => {
  console.log(productData);
  return (
    <div className="p-4">
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
            {depotData.map((depot) => (
              <tr key={depot._id}>
                <td className="px-6 py-4 whitespace-nowrap hidden">
                  <div className="text-sm text-gray-900 ">{depot.productId}</div>
                </td>
                {productData.map((product) => {
                  if (product._id === depot.productId) {
                    return (
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.title}</div>
                      </td>
                    );
                  }
                  return null;
                })}

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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDepot;
