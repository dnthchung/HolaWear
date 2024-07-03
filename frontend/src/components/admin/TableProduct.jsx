import React, { useState } from "react";
import { format, parseISO } from "date-fns";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, ChevronDown, Pencil, Eye } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import FormAddDepot from "./FormAddDepot";
import AdminProductDetail from "./AdminProductDetail";
import FormAddProduct from "./FormAddProduct";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

const TableProduct = ({ productData, categories, tags }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = productData.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedCategory ? product.category === selectedCategory : true));

  return (
    <div className="p-4">
      <div className="flex items-center justify-between space-x-4 mb-4">
        <input type="text" placeholder="Search by product name" value={searchTerm} onChange={handleSearchChange} className="px-4 py-2 border rounded-lg w-full sm:w-1/2 lg:w-1/3" />
        {/* categories dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none bg-white hover:bg-gray-50 text-gray-800 py-1 px-2 border border-gray-200 rounded shadow">
            {selectedCategory || "Category"}
            <ChevronDown size={18} color="#c8c8cf" className="inline-block ml-2" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="flex items-center">Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem key="all" onClick={() => handleCategorySelect("")}>
              All
            </DropdownMenuItem>
            {categories.map((category) => (
              <DropdownMenuItem key={category._id} onClick={() => handleCategorySelect(category.name)}>
                {category.name} - {category._id}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {/* add product button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <p>Add Product</p>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Depot</DialogTitle>
              <DialogDescription>Add new depot for this product</DialogDescription>
            </DialogHeader>
            <FormAddProduct />
          </DialogContent>
        </Dialog>
      </div>
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              {/* tag */}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tag</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <tr key={product._id}>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{truncateText(product.title, 20)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {categories.map((category) => {
                    if (category._id === product.category) {
                      return (
                        <div key={category._id} className="text-sm text-gray-900">
                          {category.name}
                        </div>
                      );
                    }
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {tags.map((tag) => {
                    if (tag._id === product.tag) {
                      return (
                        <div key={tag._id} className="text-sm text-gray-900">
                          {tag.name}
                        </div>
                      );
                    }
                  })}
                  {/* <div className="text-sm text-gray-900">{product.tag}</div> */}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{product.stock}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{product.price} vnd</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.availabilityStatus === "In Stock" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {product.availabilityStatus}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{product.createdAt ? format(parseISO(product.createdAt), "HH:mm:ss dd-MM-yyyy") : "N/A"}</div>
                </td>
                <td className="px-6 py-4 text-sm font-medium flex items-center">
                  {/* show detail product */}
                  <button className="bg-white hover:bg-gray-50 text-[#7D4600] hover:text-indigo-900 py-1 px-2 border border-gray-200 rounded shadow">
                    <Eye className="h-5 w-5 hover:opacity-85" />
                  </button>
                  <button className="ml-4 bg-white hover:bg-gray-50 text-[#6E44FF] hover:text-indigo-900 py-1 px-2 border border-gray-200 rounded shadow">
                    <Pencil className="h-5 w-5 opacity-55 hover:opacity-85" />
                  </button>
                  <Dialog>
                    <DialogTrigger className="ml-4 bg-white hover:bg-gray-50 text-[#FB5012] hover:text-indigo-900 py-1 px-2 border border-gray-200 rounded shadow">
                      <ArrowDownToLine className="h-5 w-5 opacity-55 hover:opacity-85" />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add Depot</DialogTitle>
                        <DialogDescription>Add new depot for this product</DialogDescription>
                      </DialogHeader>
                      <FormAddDepot productDataById={product} />
                    </DialogContent>
                  </Dialog>
                  {product.availabilityStatus === "In Stock" && (
                    <button className="ml-4 bg-white hover:bg-gray-50 text-red-600 hover:text-red-900 py-1 px-2 border border-gray-200 rounded shadow">
                      <p className="text-sm">InActive</p>
                    </button>
                  )}
                  {(product.availabilityStatus === "Sold Out" || product.availabilityStatus === "Inactive") && (
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

export default TableProduct;
