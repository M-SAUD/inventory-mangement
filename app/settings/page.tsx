import Sidebar from "@/components/sidebar";
import { getCurrentUser } from "@/lib/auth";
import { AccountSettings } from "@stackframe/stack";


export default function SettingsPage() {
   const user= getCurrentUser();
    return (
           <div className="min-h-screen bg-gray-50">
             <Sidebar currentPath="/settings" />
             <main className="ml-64 p-8">
               <div className="mb-8">
                 <div className="flex items-center justify-between">
                   <div>
                     <h1 className="text-2xl font-semibold text-gray-900">
                       Setting
                     </h1>
                     <p className="text-sm text-gray-500">
                       Manage account settings and preferences
                     </p>
                   </div>
                 </div>
               </div>
               <div className="max-w-6xl">
                <div className="bg-whiterounded-lg border border-gray-200 p-6">
                      <AccountSettings fullPage/>
                </div>
               </div>
               </main>
               </div>
    );
}
