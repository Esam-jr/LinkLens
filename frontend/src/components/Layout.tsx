import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: React.ReactNode;
  showSidebar?: boolean;
};

function Layout({ children, showSidebar = false }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="flex">
        {showSidebar && <Sidebar />}

        <div className="flex-1 flex flex-col">
          <Navbar />

          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
