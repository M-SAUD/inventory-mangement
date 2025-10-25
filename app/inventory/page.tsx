import Pagination from "@/components/pagination";
import Sidebar from "@/components/sidebar";
import { deleteProduct } from "@/lib/actions/products";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { SearchIcon, SlidersHorizontal } from "lucide-react";

export default async function Inventorypage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string; pageSize?: string; sortBy?: string }>;
}) {
  const user = await getCurrentUser();
  const userId = user.id;
  const params = await searchParams;
  const q = (params.q ?? "").trim();
  const pageSize = Math.max(1, Number(params.pageSize ?? 5));
  const page = Math.max(1, Number(params.page ?? 1));
  const sortBy = params.sortBy ?? "date-desc";

  const where = {
    userId,
    ...(q ? { name: { contains: q, mode: "insensitive" as const } } : {}),
  };

  // Determine orderBy based on sortBy parameter
  const getOrderBy = () => {
    switch (sortBy) {
      case "price-asc":
        return { price: "asc" as const };
      case "price-desc":
        return { price: "desc" as const };
      case "quantity-asc":
        return { quantity: "asc" as const };
      case "quantity-desc":
        return { quantity: "desc" as const };
      case "date-asc":
        return { createdAt: "asc" as const };
      case "date-desc":
      default:
        return { createdAt: "desc" as const };
    }
  };

  const [totalCount, items] = await Promise.all([
    prisma.product.count({ where }),
    prisma.product.findMany({ where, orderBy: getOrderBy(), skip: (page - 1) * pageSize, take: pageSize }),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/inventory" />
      <main className="ml-64 p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Inventory
              </h1>
              <p className="text-sm text-gray-500">
                Manage your products and track inventory levels.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          {/* Search */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <form className="flex gap-2" action="/inventory" method="GET">
              <input
                name="q"
                placeholder="Search Products..."
                defaultValue={q}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-500 transition-all"
              >
                <SearchIcon />
              </button>
              <input type="hidden" name="pageSize" value={pageSize} />
              <input type="hidden" name="sortBy" value={sortBy} />
            </form>

            {/* Collapsible Filter Section */}
            <details className="mt-4 group">
              <summary className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer hover:text-purple-600 transition-colors">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
                <svg 
                  className="w-4 h-4 transition-transform group-open:rotate-180" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <form action="/inventory" method="GET" className="flex items-end gap-4">
                  <input type="hidden" name="q" value={q} />
                  
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sort by
                    </label>
                    <select
                      name="sortBy"
                      defaultValue={sortBy}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 "
                    >
                      <option value="date-desc">Date (Newest first)</option>
                      <option value="date-asc">Date (Oldest first)</option>
                      <option value="price-asc">Price (Low to High)</option>
                      <option value="price-desc">Price (High to Low)</option>
                      <option value="quantity-asc">Quantity (Low to High)</option>
                      <option value="quantity-desc">Quantity (High to Low)</option>
                    </select>
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Items per page
                    </label>
                    <select
                      name="pageSize"
                      defaultValue={pageSize.toString()}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit"
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-all"
                  >
                    Apply
                  </button>
                </form>
              </div>
            </details>

            <div className="mt-4 text-sm text-gray-600">
              Showing {items.length} of {totalCount} products
            </div>
          </div>

          {/* Product Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-300">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    SKU
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Low Stock At
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((product, key) => (
                  <tr key={key} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-left text-sm text-gray-500">
                      {product.name}
                    </td>
                    <td className="px-6 py-3 text-left text-sm text-gray-500">
                      {product.sku || "-"}
                    </td>
                    <td className="px-6 py-3 text-left text-sm text-gray-500">
                      ${Number(product.price).toFixed(2)}
                    </td>
                    <td className="px-6 py-3 text-left text-sm text-gray-500">
                      {product.quantity}
                    </td>
                    <td className="px-6 py-3 text-left text-sm text-gray-500">
                      {product.lowStockAt || "-"}
                    </td>
                    <td className="px-6 py-3 text-left text-sm text-gray-500">
                      <form
                        action={async (formData: FormData) => {
                          "use server";
                          await deleteProduct(formData);
                        }}
                      >
                        <input type="hidden" name="id" value={product.id} />
                        <button className="text-red-600 hover:text-red-900">
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                baseUrl="/inventory"
                searchParams={{ q, pageSize: String(pageSize), sortBy }}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}