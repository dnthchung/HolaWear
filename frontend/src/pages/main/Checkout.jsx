import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "@/App";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import axios from "axios";

const Checkout = () => {
  const { state } = useLocation();
  const { products, subtotal, shipping, total } = state || {};
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const { userAuth } = useContext(UserContext);
  const userId = userAuth?.user?.id;
  const addresses = userAuth?.user?.shippingAddress;
  const orderStatus = "pending";
  const isPayment = false;

  useEffect(() => {
    if (userAuth?.user) {
      setIsLoading(false);
    }
  }, [userAuth]);

  useEffect(() => {
    if (!state || !products || !subtotal || !shipping || !total) {
      toast.error("You must check out from the cart first.");
      navigate("/");
    }
  }, [state, products, subtotal, shipping, total, navigate]);

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      toast.error("Please select a delivery address");
      return;
    }
    const orderItems = products.map((product) => ({
      productTitle: product.productTitle,
      productId: product.productId,
      color: product.color,
      size: product.size,
      quantity: product.quantity,
      price: product.price,
    }));
    const shippingAddress = addresses.find((address) => address._id === selectedAddress);
    const totalPrice = parseFloat(total.replace(/,/g, ""));

    try {
      const orderResponse = await axios.post("http://localhost:9999/api/order/create-order", {
        userId: userId,
        orderItems: orderItems,
        shippingAddress: shippingAddress,
        totalPrice: totalPrice,
        orderStatus: orderStatus,
      });

      if (orderResponse.status === 201) {
        toast.success("Order created successfully");

        // Remove ordered items from cart
        await axios.post("http://localhost:9999/api/cart/remove-ordered-items", {
          userId: userId,
          orderedItems: orderItems,
        });

        setTimeout(() => {
          navigate("/order-success");
        }, 2000);
      }
    } catch (error) {
      console.error("Error creating order", error);
      toast.error("An error occurred while creating the order");
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  }

  if (!addresses) {
    return (
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-semibold">No addresses found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <div className="p-4 mt-6">
        <h2 className="text-xl font-semibold">Delivery Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          {addresses.map((address) => (
            <label key={address._id} className="bg-white p-4 rounded shadow-md cursor-pointer">
              <input type="radio" name="deliveryAddress" value={address._id} id={`address-${address._id}`} onChange={() => setSelectedAddress(address._id)} className="mr-2" />
              <div className="mb-4">
                <h3 className="text-lg font-bold">Full name: {address.fullName}</h3>
              </div>
              <div className="mb-4">
                <p>
                  {" "}
                  Phone number: <i>{address.phone}</i>{" "}
                </p>
                <p>
                  {" "}
                  Address: <i>{address.address}</i>{" "}
                </p>
                <p>
                  {" "}
                  Specific Address: <i>{address.specificAddress}</i>{" "}
                </p>
              </div>
            </label>
          ))}
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold my-10">Products Ordered</h2>
          <div className="grid grid-cols-12 gap-4 mb-4 border-b pb-2">
            <label className="col-span-2 font-semibold">Image</label>
            <label className="col-span-2 font-semibold">Product</label>
            <label className="col-span-1 font-semibold">Color</label>
            <label className="col-span-1 font-semibold">Size</label>
            <label className="col-span-1 font-semibold flex justify-center">Unit Price</label>
            <label className="col-span-1 font-semibold flex justify-center">Quantity</label>
            <label className="col-span-1 font-semibold text-right">Total</label>
          </div>
          {products.map((product) => (
            <div key={`${product.productId}-${product.size}`} className="grid grid-cols-12 gap-4 items-center mb-4 border-b pb-2">
              <div className="col-span-2">
                <img src={product.thumbnail} alt={product.productTitle} className="w-16" />
              </div>
              <div className="col-span-2">
                <div className="font-semibold">{product.productTitle || "Product Title"}</div>
              </div>
              <div className="col-span-1">
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: product.color }}></div>
              </div>
              <div className="col-span-1">{product.size}</div>
              <div className="col-span-1 flex justify-center">
                <p>{product.price.toLocaleString("en-US")}</p>
              </div>
              <div className="col-span-1 flex justify-center">{product.quantity}</div>
              <div className="col-span-1 text-right">{(product.price * product.quantity).toLocaleString("en-US")}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <div className="w-1/3 flex flex-col">
            <div className="flex justify-between border-t pt-2">
              <span>Merchandise Subtotal</span>
              <span>{subtotal}</span>
            </div>
            <div className="flex justify-between my-2">
              <span>Shipping</span>
              <span>{shipping.toLocaleString("en-US")}</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-4">
              <span>Total Payment</span>
              <span>{total}</span>
            </div>
            <Button className="mt-6 w-full" variant="secondary" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
