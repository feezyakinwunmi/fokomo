// app/account/layout.tsx
import AccountSidebar from "@/components/account/account-sidebar"

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Hide the main header on account pages */}
      
      <div className="min-h-screen bg-gray-50 lg:flex">
        {/* Sidebar - visible on all account pages */}
        <AccountSidebar />
        
        {/* Main content area */}
        <div className="min-w-0 flex-1">
          {children}
        </div>
      </div>
    </>
  )
}