import Sidebar from "@/components/sidebar";
import { createProduct } from "@/lib/actions/products";
import { getCurrentUser } from "@/lib/auth";
import Link from "next/link";
import React from "react";

const AddProduct = async () => {
  const user = await getCurrentUser();
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/add-product" />
      <main className="ml-64 p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Add Products
              </h1>
              <p className="text-sm text-gray-500">
                Add new products to your inventory
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl ">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <form className="space-y-6" action={createProduct}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter Product Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                   focus:ring-0"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
 <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  step="0.01"
                  min='0'
                  required
                  placeholder="Enter Product Price"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                   focus:ring-0"
                />
              </div>
               <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  min='0'
                  required
                  placeholder="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                   focus:ring-0"
                />
              </div>
              </div>
              <div>
                <label
                  htmlFor="sku"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                 SKU (Optional)
                </label>
                <input
                  type="text"
                  id="sku"
                  name="sku"
                  
                  placeholder="Enter SKU"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                   focus:ring-0"
                />
              </div>

              <div>
                <label
                  htmlFor="lowStockAt"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Low Stock At (Optional)
                </label>
                <input
                  type="text"
                  id="lowStockAt"
                  name="lowStockAt"
                  
                  placeholder="Enter low stock threshold"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                   focus:ring-0"
                />
              </div>
              <div className="flex gap-5">
                <button 
                type='submit'
                className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-700 cursor-pointer">
                    Add product</button>
                    <Link href="/inventory" className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
                    Cancel
                    </Link>
                     </div>
            </form>

          </div>
        </div>
      </main>
    </div>
  );
};

export default AddProduct;
