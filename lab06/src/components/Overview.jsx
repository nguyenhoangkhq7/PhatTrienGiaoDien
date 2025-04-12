const Overview = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-red-800 mb-4">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="overview-item p-4 bg-white rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">Turnover</h3>
          <p className="amount text-xl font-bold text-gray-900">$92,405</p>
          <p className="change text-green-500">▲ 5.39%</p>
        </div>
        <div className="overview-item p-4 bg-white rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">Profit</h3>
          <p className="amount text-xl font-bold text-gray-900">$32,218</p>
          <p className="change text-green-500">▲ 5.39%</p>
        </div>
        <div className="overview-item p-4 bg-white rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">New Customers</h3>
          <p className="amount text-xl font-bold text-gray-900">298</p>
          <p className="change text-green-500">▲ 6.84%</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
