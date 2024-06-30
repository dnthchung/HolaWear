import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ChangePassword from "../../components/auth/ChangePassword";
import ChangeGeneral from "../../components/auth/ChangeGeneral";
import ShippingAddress from "../../components/auth/ShippingAddress";

const UserProfile = () => {
  return (
    <>
      <div className="container mx-auto rounded bg-white mt-5 mb-5">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
          <div className="col-span-1 ">
            <div className="flex flex-col items-center text-center p-5 py-5">
              <img
                className="rounded-full mt-5 w-36"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="Profile"
              />
              <span className="font-bold">Đỗ Đức Thiện</span>
              <span className="text-gray-500">thiendd03@gmail.com</span>
            </div>
          </div>

          <div className="col-span-2 md:col-span-2 ">
            <div className="w-full h-full">
              <Tabs defaultValue="general">
                <TabsList>
                  <TabsTrigger className="mr-5" value="general">
                    General
                  </TabsTrigger>
                  <TabsTrigger className="mr-5" value="password">
                    Change Password
                  </TabsTrigger>
                  <TabsTrigger value="address">Shipping Address</TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="w-full">
                  <ChangeGeneral />
                </TabsContent>
                <TabsContent value="password">
                  <ChangePassword />
                </TabsContent>
                <TabsContent value="address">
                  <ShippingAddress />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
