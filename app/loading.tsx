"use client"
import Sidebar from "@/components/sidebar";
import { usePathname } from "next/navigation";
import { use } from "react";

export default function Loading() {

  // Stack uses React Suspense, which will render this page while user data is being fetched.
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/loading
  const pathname=usePathname();
  console.log("Loading Pathname:",pathname);
   
  const showSidebar= !["/","sign-in","/sign-up"].includes(pathname);
  return (
    
    <div className="min-h-screen bg-gray-50">
      {showSidebar && <Sidebar currentPath={pathname} />}
      <div className="ml-64 p-8 space-y-8">
        {/* Header Skeleton */}
        <div className="mb-8 space-y-2">
          <div className="h-6 w-1/4 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Key Metrics Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-gray-200 p-6 space-y-4"
            >
              <div className="h-8 w-1/2 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Charts Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[...Array(2)].map((_, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-gray-200 p-6 h-48 animate-pulse"
            ></div>
          ))}
        </div>

        {/* Recent Products Skeleton */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-2">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="h-6 w-full bg-gray-200 rounded animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
