import { UserButton } from "@stackframe/stack";
import { BarChart3, BarChart4, Package, Plus, Settings } from "lucide-react";
import Link from "next/link";

export default function Sidebar({
  currentPath = "/dashboard",
}: {
  currentPath: string;
}) {
  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Inventory", href: "/inventory", icon: Package },
    { name: "Products", href: "/add-product", icon: Plus },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="fixed left-0 top-0 bg-gray-900 text-white w-64 min-h-screen p-10 z-10">
      <div className="mb-8 ">
        <div className="flex items-center space-x-2 mb-4">
          <BarChart4 className="w-6 h-6" />
          <span className="text-lg font-semibold">Inventory App</span>
        </div>
      </div>

      <nav className="space-y-1">
        <div className="text-sm font-semibold text-gray-400 uppercase mb-3">
          Inventory
        </div>
        {navigation.map((item, key) => {
          const IconComponent = item.icon;
          const isActive = currentPath === item.href;
          return (
            <Link
              href={item.href}
              key={key}
              className={`flex items-center space-x-4 py-1 px-3 rounded-lg ${
                isActive
                  ? "bg-purple-100 text-gray-800"
                  : "text-gray-300 hover:bg-gray-700 hover:scale-103 transition-all duration-200 "
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
        <div className=" flex items-center justify-between">
            <UserButton showUserInfo/>

        </div>
      </div>
    </div>
  );
}
