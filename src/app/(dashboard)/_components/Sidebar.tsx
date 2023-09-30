import Logo from "./Logo";
import SidebarRoutes from "./SidebarRoutes";

export const Sidebar = () => {
  return (
    <aside className="sidebar hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50 border-r overflow-y-auto bg-white shadow-sm">
      <Logo />
      <SidebarRoutes />
    </aside>
  );
};
