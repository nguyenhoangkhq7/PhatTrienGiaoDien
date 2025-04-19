function Header() {
  return (
    <div className="p-4 bg-white flex items-center justify-between shadow-sm">
      {/* Tiêu đề Dashboard */}
      <h1 className="text-2xl font-semibold text-[#ec4899]">Dashboard</h1>

      {/* Thanh tìm kiếm */}
      <div className="ml-auto mr-4 max-w-[200px]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-5 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#ec4899] transition-all duration-200"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Biểu tượng chuông và avatar */}
      <div className="flex items-center space-x-4">
        {/* Biểu tượng chuông */}
        <button className="text-gray-700 hover:text-[#ec4899] transition-colors duration-200">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        {/* Biểu tượng dấu hỏi */}
        <button className="text-gray-700 hover:text-[#ec4899] transition-colors duration-200">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>

        {/* Avatar người dùng */}
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#ec4899]">
          <img
            src="https://i.pravatar.cc/40?img=3" // Thay bằng URL avatar thực tế nếu có
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
