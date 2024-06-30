import React from "react";
import TableColor from "@/components/admin/TableColor";

const productsData = [
  {
    colorName: "Green",
    colorId: 1,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMjY1jaesw4b2_XILVZc_73geu92cMFkcPw&s",
  },
  {
    colorName: "Green",
    colorId: 2,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMjY1jaesw4b2_XILVZc_73geu92cMFkcPw&s",
  },
  {
    colorName: "Green",
    colorId: 3,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMjY1jaesw4b2_XILVZc_73geu92cMFkcPw&s",
  },
  {
    colorName: "Green",
    colorId: 4,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMjY1jaesw4b2_XILVZc_73geu92cMFkcPw&s",
  },
];

const ManageColor = () => {
  return (
    <div>
      <TableColor productsData={productsData} />
    </div>
  );
};

export default ManageColor;
