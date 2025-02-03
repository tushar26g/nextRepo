import { AdPanel } from "./AdPanel";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
// import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex-1 flex pt-16">
        {/* <Sidebar /> */}
        <main className="flex-1 mx-64 p-6">{children}</main>
        <AdPanel />
      </div>
      <Footer />
    </div>
  );
}
