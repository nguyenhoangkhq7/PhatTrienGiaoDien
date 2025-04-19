import { useState, useEffect } from "react";
import axios from "axios";

function EditModal({ isOpen, onClose, onSave, initialData }) {
  const [formData, setFormData] = useState(initialData || {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const updatedData = {
        ...formData,
        orderDate: formData.orderDate
          ? new Date(formData.orderDate).toLocaleDateString("en-GB")
          : formData.orderDate,
        orderValue: formData.orderValue || "",
        name: formData.name || "",
        company: formData.company || "",
        status: formData.status || "New",
        avatar: formData.avatar || "",
      };

      const response = await axios.put(
        `https://67fb34d58ee14a54262975bb.mockapi.io/data/orders/${formData.id}`,
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      onSave(response.data);
      setLoading(false);
      onClose();
    } catch (err) {
      console.error("Error updating data:", err.response?.data || err);
      setError("Failed to update data. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white p-8 rounded-xl w-full max-w-lg shadow-2xl transform transition-all duration-300 scale-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 tracking-tight">
          Chỉnh sửa thông tin
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="space-y-5">
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
              type="text"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ngày đặt hàng
            </label>
            <input
              name="orderDate"
              type="date"
              value={
                formData.orderDate
                  ? formData.orderDate.includes("/")
                    ? formData.orderDate.split("/").reverse().join("-")
                    : formData.orderDate
                  : ""
              }
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>

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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Avatar URL
            </label>
            <input
              name="avatar"
              value={formData.avatar || ""}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              placeholder="URL của avatar"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 font-medium"
            disabled={loading}
          >
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : null}
            {loading ? "Đang lưu..." : "Lưu"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
