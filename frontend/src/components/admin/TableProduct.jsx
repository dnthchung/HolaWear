import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, ChevronDown, Pencil, Eye, Trash2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "react-hot-toast";
import FormAddDepot from "./FormAddDepot";
import AdminProductDetail from "./AdminProductDetail";
import FormAddProduct from "./FormAddProduct";
import AddStockProduct from "./AddStockProduct";

import readXlsxFile from "read-excel-file";
import axios from "axios";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

const TableProduct = ({ productData, categories, tags, types, brands }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleImportClick = () => {
    if (selectedFile) {
      readXlsxFile(selectedFile).then((rows) => {
        // Assuming the first row is the header
        const headers = rows[0];
        const data = rows.slice(1).map((row) => {
          let product = {};

          headers.forEach((header, index) => {
            let value = row[index];
            // Only handle double-dash-separated values for images field
            if (header === "images") {
              if (typeof value === "string") {
                if (value.includes("--")) {
                  value = value.split("--").map((url) => url.trim());
                } else {
                  value = [value.trim()]; // Single URL in an array
                }
              }
            }
            product[header] = value;
          });

          return product;
        });
        // Send the data to the server
        fetch("http://localhost:9999/api/product/import", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ products: data }),
        })
          .then((response) => response.json())
          .then((data) => {
            toast.success("Products imported successfully");
            // Set time for reload page after 2 seconds
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          })
          .catch((error) => {
            console.error("Error importing products:", error);
            toast.error("Failed to import products");
          });
      });
    } else {
      toast.error("No file selected");
    }
  };

  const handleDeleteClick = (productId) => {
    setProductToDelete(productId);
  };

  const handleDeleteConfirm = () => {
    if (productToDelete) {
      fetch(`http://localhost:9999/api/product/${productToDelete}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          toast.success("Product deleted successfully");
          setProductToDelete(null);
          // Set time for reload page after 2 seconds
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
          toast.error("Failed to delete product");
        });
    }
  };

  const handleStatusUpdate = (productId, newStatus) => {
    axios
      .put(`http://localhost:9999/api/product/status/${productId}`, { status: newStatus })
      .then((response) => {
        toast.success("Product status updated successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        console.error("Error updating product status:", error);
        toast.error("Failed to update product status");
      });
  };

  const filteredProducts = productData.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedCategory ? product.category === selectedCategory : true) && (selectedTag ? product.tag === selectedTag : true),
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to the first page
  };

  const currentProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-4">
      <div className="flex items-center justify-start space-x-4 mb-4">
        <input type="text" placeholder="Search by product name" value={searchTerm} onChange={handleSearchChange} className="px-4 py-2 border rounded-lg w-full sm:w-1/2 lg:w-1/3" />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <p>Import</p>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Import Product</DialogTitle>
              <DialogDescription>Import product from excel file</DialogDescription>
            </DialogHeader>
            <div className="flex justify-center items-center">
              <input type="file" className="border border-gray-300 rounded-md p-2" onChange={handleFileChange} />
              <Button variant="outline" className="ml-4" onClick={handleImportClick}>
                Import
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <p>Add Product</p>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Product</DialogTitle>
              <DialogDescription>Add new product</DialogDescription>
            </DialogHeader>
            <FormAddProduct />
          </DialogContent>
        </Dialog>

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

        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none bg-white hover:bg-gray-50 text-gray-800 py-1 px-2 border border-gray-200 rounded shadow">
            {selectedTag || "Tag"}
            <ChevronDown size={18} color="#c8c8cf" className="inline-block ml-2" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="flex items-center">Tag</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem key="all" onClick={() => handleTagSelect("")}>
              All
            </DropdownMenuItem>
            {tags.map((tag) => (
              <DropdownMenuItem key={tag._id} onClick={() => handleTagSelect(tag.name)}>
                {tag.name} - {tag._id}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tag</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentProducts.map((product) => (
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
                  <button className="bg-white hover:bg-gray-50 text-[#7D4600] hover:text-indigo-900 py-1 px-2 border border-gray-200 rounded shadow">
                    <Eye className="h-5 w-5 hover:opacity-85" />
                  </button>

                  {/* edit price */}
                  <Dialog>
                    <DialogTrigger className="ml-4 bg-white hover:bg-gray-50 text-[#6E44FF] hover:text-indigo-900 py-1 px-2 border border-gray-200 rounded shadow">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Pencil className="h-5 w-5 opacity-55 hover:opacity-85" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Edit Price</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Product Price</DialogTitle>
                        <DialogDescription>Add new price for: {product.title} </DialogDescription>
                      </DialogHeader>
                      <AddStockProduct productDataById={product} />
                    </DialogContent>
                  </Dialog>
                  {/*  */}

                  {/*  */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button
                        className="ml-4 bg-white hover:bg-gray-50 text-[#bd4131] hover:text-indigo-900 py-1 px-2 border border-gray-200 rounded shadow"
                        onClick={() => handleDeleteClick(product._id)}
                      >
                        <Trash2 className="h-5 w-5 hover:opacity-85" />
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>This action cannot be undone. This will permanently delete the product.</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDeleteConfirm}>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  {/* add depot */}
                  <Dialog>
                    <DialogTrigger className="ml-4 bg-white hover:bg-gray-50 text-[#FB5012] hover:text-indigo-900 py-1 px-2 border border-gray-200 rounded shadow">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <ArrowDownToLine className="h-5 w-5 opacity-55 hover:opacity-85" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Import Depot</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
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
                    <button
                      className="ml-4 bg-white hover:bg-gray-50 text-red-600 hover:text-red-900 py-1 px-2 border border-gray-200 rounded shadow"
                      onClick={() => handleStatusUpdate(product._id, "InActive")}
                    >
                      <p className="text-sm">InActive</p>
                    </button>
                  )}
                  {(product.availabilityStatus === "Sold Out" || product.availabilityStatus === "InActive") && (
                    <button
                      className=" ml-4 bg-white hover:bg-gray-50 text-green-600 hover:text-green-900 py-1 px-2 border border-gray-200 rounded shadow"
                      onClick={() => handleStatusUpdate(product._id, "In Stock")}
                    >
                      <p className="text-xs">In Stock</p>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <span>
            Showing {currentProducts.length} of {filteredProducts.length} data
          </span>
          <div className="flex space-x-1">
            <button onClick={() => handleChangePage(currentPage - 1)} disabled={currentPage === 1} className="px-2 py-1 border rounded">
              Previous
            </button>
            {[...Array(totalPages).keys()].map((page) => (
              <button key={page + 1} onClick={() => handleChangePage(page + 1)} className={`px-2 py-1 border rounded ${currentPage === page + 1 ? "bg-blue-500 text-white" : ""}`}>
                {page + 1}
              </button>
            ))}
            <button onClick={() => handleChangePage(currentPage + 1)} disabled={currentPage === totalPages} className="px-2 py-1 border rounded">
              Next
            </button>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="itemsPerPage" className="mr-2">
            Items per page:
          </label>
          <select id="itemsPerPage" value={itemsPerPage} onChange={handleItemsPerPageChange} className="p-2 border rounded">
            <option value={5}>8</option>
            <option value={15}>16</option>
            <option value={20}>30</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TableProduct;
