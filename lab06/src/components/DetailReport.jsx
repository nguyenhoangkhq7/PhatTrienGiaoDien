import { useEffect, useState } from "react";
import axios from "axios";

const DetailReport = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    axios
      .get("https://54d80294-76e9-4d9a-afbc-a95c366d8594.mock.pstmn.io/data")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  const totalPages = Math.ceil(orders.length / perPage);
  const paginatedOrders = orders.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h2>Detailed Report</h2>
        <div>
          <button>Import</button>
          <button style={{ marginLeft: "10px" }}>Export</button>
        </div>
      </div>

      {/* Table */}
      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Order Value</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrders.map((order, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <img
                  src={order.avatar}
                  alt={order.name}
                  width="30"
                  style={{ verticalAlign: "middle", marginRight: "8px" }}
                />
                {order.name}
              </td>
              <td>{order.company}</td>
              <td>{order.orderValue}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>✏️</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <p>{orders.length} results</p>
        <div>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              style={{
                margin: "0 4px",
                fontWeight: currentPage === page ? "bold" : "normal",
              }}
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
