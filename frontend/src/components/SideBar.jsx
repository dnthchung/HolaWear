import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SideBar = ({ selectedColors, setSelectedColors, selectedPrices, setSelectedPrices, selectedBrands, setSelectedBrands, priceRange, setPriceRange }) => {
  const colors = ["#ff0000", "#ff5722", "#ffeb3b", "#4caf50", "#2196f3", "#000000", "#795548", "#e91e63", "#cddc39", "#9c27b0", "#00bcd4", "#607d8b"];
  const brands = ["Adidas", "Nike", "Puma", "Gucci", "Dior", "Fila", "Vans", "Uniqlo", "Lacoste"];

  const toggleSelection = (item, setSelectedItems, selectedItems) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="w-64 p-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="colors">
          <AccordionTrigger>Colors</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap">
              {colors.map((color) => (
                <div
                  key={color}
                  className={`w-8 h-8 rounded-full mr-2 mb-2 cursor-pointer ${selectedColors.includes(color) ? "border-2 border-black" : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={() => toggleSelection(color, setSelectedColors, selectedColors)}
                ></div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <div className="mb-4">
              <input type="number" placeholder="From" className="w-20 mr-2 p-1 border rounded" value={priceRange[0]} onChange={(e) => setPriceRange([e.target.value, priceRange[1]])} />
              <input type="number" placeholder="To" className="w-20 p-1 border rounded" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], e.target.value])} />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brand">
          <AccordionTrigger>Brand</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap">
              {brands.map((brand) => (
                <button
                  key={brand}
                  className={`m-1 px-2 py-1 border rounded ${selectedBrands.includes(brand) ? "bg-gray-400" : "bg-white"}`}
                  onClick={() => toggleSelection(brand, setSelectedBrands, selectedBrands)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SideBar;
