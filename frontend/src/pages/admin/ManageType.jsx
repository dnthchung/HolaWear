import React from "react";
import TableType from "@/components/admin/TableType";

const productsData = [
  {
    typeName: "T-Shirt",
    typeId: 1,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7qcvg8wdNEDy_jQUep6ia4x9HaXm2xYBEQ&s",
  },
  {
    typeName: "Sleeve",
    typeId: 2,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7qcvg8wdNEDy_jQUep6ia4x9HaXm2xYBEQ&s",
  },
  {
    typeName: "Polo",
    typeId: 3,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7qcvg8wdNEDy_jQUep6ia4x9HaXm2xYBEQ&s",
  },
  {
    typeName: "Pant",
    typeId: 4,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7qcvg8wdNEDy_jQUep6ia4x9HaXm2xYBEQ&s",
  },
];
const ManageType = () => {
  return (
    <div>
      <TableType productsData={productsData} />
    </div>
  );
};

export default ManageType;
