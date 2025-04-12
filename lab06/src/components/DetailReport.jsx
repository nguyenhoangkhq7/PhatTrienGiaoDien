import React from "react";

const DetailReport = () => {
  const reportData = [
    {
      category: "Marketing",
      cost: "$12,400",
      revenue: "$50,200",
      growth: "▲ 8.24%",
    },
    {
      category: "Sales",
      cost: "$9,800",
      revenue: "$72,450",
      growth: "▲ 10.18%",
    },
    {
      category: "Operations",
      cost: "$15,670",
      revenue: "$35,900",
      growth: "▲ 4.75%",
    },
    {
      category: "IT & Support",
      cost: "$8,210",
      revenue: "$22,310",
      growth: "▲ 5.12%",
    },
  ];

  return (
    <div className="detail-report">
      <h2 className="text-2xl font-semibold mb-4">Detail Report</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-black-300 bg-black-100 text-left">
              Category
            </th>
            <th className="px-4 py-2 border border-black-300 bg-black-100 text-right">
              Cost
            </th>
            <th className="px-4 py-2 border border-black-300 bg-black-100 text-right">
              Revenue
            </th>
            <th className="px-4 py-2 border border-black-300 bg-black-100 text-right">
              Growth
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default DetailReport;
