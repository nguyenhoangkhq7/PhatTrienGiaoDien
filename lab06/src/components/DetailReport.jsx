import { useEffect, useState } from "react";
import axios from "axios";
import EditModal from "../components/EditModal";

const DetailReport = () => {
  const [orders, setOrders] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  const handleEditClick = (order) => {
    setSelected(order);
    setModalOpen(true);
  };

  const handleSave = async (updatedOrder) => {
    try {
      const response = await axios.put(
        `https://67fb34d58ee14a54262975bb.mockapi.io/data/orders/${updatedOrder.id}`,
        updatedOrder
      );
      setOrders((prevOrders) =>
        prevOrders.map((o) => (o.id === updatedOrder.id ? response.data : o))
      );
      setModalOpen(false);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  useEffect(() => {
    axios
      .get("https://67fb34d58ee14a54262975bb.mockapi.io/data/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  const totalPages = Math.ceil(orders.length / perPage);
  const paginatedOrders = orders.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Detailed Report</h2>
        <div className="space-x-3">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200">
            Import
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="px-6 py-4">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="px-6 py-4">Customer Name</th>
              <th className="px-6 py-4">Company</th>
              <th className="px-6 py-4">Order Value</th>
              <th className="px-6 py-4">Order Date</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Edit</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order) => (
              <tr
                key={order.id}
                className="border-t hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="px-6 py-4 flex items-center">
                  <img
                    src={order.avatar}
                    alt={order.name}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <span>{order.name}</span>
                </td>
                <td className="px-6 py-4">{order.company}</td>
                <td className="px-6 py-4">{order.orderValue}</td>
                <td className="px-6 py-4">{order.orderDate}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${
                      order.status === "New"
                        ? "bg-blue-100 text-blue-800"
                        : order.status === "In-progress"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEditClick(order)}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    ✏️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      <EditModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        initialData={selected}
      />

      {/* Footer - Pagination */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-gray-600">{orders.length} results</p>
        <div className="space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-colors duration-200`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailReport;
