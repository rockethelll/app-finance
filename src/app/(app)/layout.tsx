import SideBar from '@/components/side-bar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-green">
      <SideBar />
      {children}
    </div>
  );
};

export default Layout;
