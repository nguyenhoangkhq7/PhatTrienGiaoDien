import { useEffect, useState } from "react";

const Overview = () => {
  const [data, setData] = useState([]);
  const [turnover, setTurnover] = useState(0);
  const [profit, setProfit] = useState(0);
  const [newCustomers, setNewCustomers] = useState(0);

  useEffect(() => {
    fetch("https://67fb34d58ee14a54262975bb.mockapi.io/data/orders")
      .then((res) => res.json())
      .then((orders) => {
        setData(orders);

        // Tính Turnover
        const totalTurnover = orders.reduce((sum, order) => {
          const amount = parseFloat(
            order.orderValue.replace("$", "").replace(",", "")
          );
          return sum + amount;
        }, 0);

        setTurnover(totalTurnover);
        setProfit(totalTurnover * 0.35); // Giả sử 35% lợi nhuận
        setNewCustomers(orders.filter((o) => o.status === "New").length);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-red-800 mb-4">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">Turnover</h3>
          <p className="text-xl font-bold text-gray-900">
            ${turnover.toLocaleString()}
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">Profit</h3>
          <p className="text-xl font-bold text-gray-900">
            ${profit.toLocaleString()}
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">New Customers</h3>
          <p className="text-xl font-bold text-gray-900">{newCustomers}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
