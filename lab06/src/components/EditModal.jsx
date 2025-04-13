import { useState, useEffect } from "react";

function EditModal({ isOpen, onClose, onSave, initialData }) {
  const [formData, setFormData] = useState(initialData || {});

  // Cập nhật lại formData khi initialData thay đổi
  useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  // Nếu modal không mở, không render gì
  if (!isOpen) return null;

  // Xử lý thay đổi dữ liệu trong các trường input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Xử lý lưu khi người dùng nhấn lưu
  const handleSubmit = () => {
    onSave(formData); // Trả lại formData cho hàm onSave để xử lý
    onClose(); // Đóng modal sau khi lưu
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white p-8 rounded-xl w-full max-w-lg shadow-2xl transform transition-all duration-300 scale-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 tracking-tight">
          Chỉnh sửa thông tin
        </h2>

        <div className="space-y-5">
          {/* Tên khách hàng */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên
            </label>
            <input
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              placeholder="Tên khách hàng"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              placeholder="Email"
            />
          </div>

          {/* Công ty */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Công ty
            </label>
            <input
              name="company"
              value={formData.company || ""}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              placeholder="Tên công ty"
            />
          </div>

          {/* Giá trị đơn hàng */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Giá trị đơn hàng
            </label>
            <input
              name="orderValue"
              value={formData.orderValue || ""}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              placeholder="Giá trị đơn hàng"
              type="text" // Đổi sang text để giữ nguyên định dạng "$359"
            />
          </div>

          {/* Ngày đặt hàng */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ngày đặt hàng
            </label>
            <input
              name="orderDate"
              type="date"
              value={
                formData.orderDate
                  ? formData.orderDate.split("/").reverse().join("-")
                  : ""
              } // Chuyển định dạng "10/07/2023" sang "2023-07-10"
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>

          {/* Trạng thái đơn hàng */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Trạng thái
            </label>
            <select
              name="status"
              value={formData.status || "New"}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-800 bg-white"
            >
              <option value="New" className="text-gray-800 bg-white">
                Mới
              </option>
              <option value="In-progress" className="text-gray-800 bg-white">
                Đang xử lý
              </option>
              <option value="Completed" className="text-gray-800 bg-white">
                Hoàn thành
              </option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 font-medium"
          >
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
