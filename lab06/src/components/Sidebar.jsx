import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", to: "/dashboard", icon: "📊" },
  { label: "Projects", to: "/projects", icon: "📁" },
  { label: "Teams", to: "/teams", icon: "👥" },
  { label: "Analytics", to: "/analytics", icon: "📈" },
  { label: "Messages", to: "/messages", icon: "💬" },
  { label: "Integrations", to: "/integrations", icon: "🔌" },
];

function Sidebar() {
  return (
    <div className="w-64 h-screen p-4 flex flex-col justify-between bg-white">
      <div>
        {/* Logo */}
        <div className="mb-8">
          <img src="/img/Logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded cursor-pointer ${
                  isActive
                    ? "bg-[#ec4899] text-white font-semibold"
                    : "hover:bg-gray-100 text-gray-600"
                }`
              }
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="mt-6 p-4 bg-white rounded text-sm text-center">
        <div className="mb-2 font-semibold text-gray-800 text-base">
          V2.0 IS AVAILABLE
        </div>
        <div className="flex justify-center items-center mb-3">
          <img
            src="/img/BottomBanner.png"
            alt="Banner Illustration"
            className="w-24 h-16 object-contain"
          />
        </div>
        <button className="px-4 py-1 border border-[#ec4899] text-[#ec4899] rounded">
          Try now
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
