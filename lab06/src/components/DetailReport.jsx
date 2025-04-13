import { useState } from "react";

const sampleData = [
  {
    id: 1,
    name: "Elizabeth Lee",
    company: "AvatarSystems",
    orderValue: "$359",
    orderDate: "10/07/2023",
    status: "New",
  },
  {
    id: 2,
    name: "Carlos Garcia",
    company: "SmoozeShift",
    orderValue: "$747",
    orderDate: "24/07/2023",
    status: "New",
  },
  // thêm dữ liệu giả tiếp theo...
];

const DataTable = () => {
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleSelectAll = () => {
    setSelectedAll(!selectedAll);
    setSelectedRows(!selectedAll ? sampleData.map((d) => d.id) : []);
  };

  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Detailed Report</h2>
        <div className="space-x-2">
          <button className="px-4 py-1 border">Import</button>
          <button className="px-4 py-1 border">Export</button>
        </div>
      </div>
      <table className="w-full border text-left">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectedAll}
                onChange={toggleSelectAll}
              />
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
          {sampleData.map((item) => (
            <tr key={item.id} className="border-t">
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(item.id)}
                  onChange={() => toggleRow(item.id)}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.company}</td>
              <td>{item.orderValue}</td>
              <td>{item.orderDate}</td>
              <td>{item.status}</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between items-center">
        <p>{sampleData.length} results</p>
        <div className="flex space-x-2">
          <button className="px-2 border">1</button>
          <button className="px-2 border">2</button>
          <button className="px-2 border">3</button>
          {/* có thể thêm nút phân trang giả tiếp theo nếu cần */}
        </div>
      </div>
    </div>
  );
};

export default DataTable;
