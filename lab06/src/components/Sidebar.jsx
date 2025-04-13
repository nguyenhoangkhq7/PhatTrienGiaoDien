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
    <div className="w-64 h-screen border-r p-4 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="mb-8 text-2xl font-bold text-pink-600">Logo</div>

        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded cursor-pointer ${
                  isActive
                    ? "bg-pink-100 text-pink-600 font-semibold"
                    : "hover:bg-gray-100 text-gray-700"
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
      <div className="mt-6 p-4 bg-gray-100 rounded text-sm text-center">
        <div className="mb-2 font-semibold">V2.0 is available</div>
        <div className="flex justify-center items-center mb-3">
          <div className="w-24 h-16 bg-yellow-300 rounded-sm" />
        </div>
        <button className="px-4 py-1 border text-pink-600 rounded hover:bg-pink-50">
          Try now
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
