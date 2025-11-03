import React from "react";

const gensetData = [
  { model: "IGP-40NG", application: "Prime", kw: 32, kva: 40 },
  { model: "IGP-62.5NG", application: "Prime", kw: 50, kva: 62.5 },
  { model: "IGP-125 T NG", application: "Prime", kw: 100, kva: 125 },
  { model: "IGP-225 T NG", application: "Prime", kw: 180, kva: 225 },
  { model: "IGP-260 T NG", application: "Standby", kw: 208, kva: 260 },
  { model: "IGP-330 T NG", application: "Standby", kw: 264, kva: 330 },
  { model: "IGP-480 T NG", application: "Standby", kw: 380, kva: 480 },
  { model: "IGP-510 T NG", application: "Standby", kw: 405, kva: 510 },
  { model: "IGP-750 T NG", application: "Standby", kw: 600, kva: 750 },
  { model: "IGP-1100 T NG", application: "Standby", kw: 880, kva: 1100 },
  { model: "IGP-1250 T NG", application: "Prime", kw: 1011, kva: 1250 },
  { model: "IGP-1500 T NG", application: "Prime", kw: 1170, kva: 1500 },
  { model: "IGP-1875 T NG", application: "Prime", kw: 1500, kva: 1875 },
  { model: "IGP-2000 T NG", application: "Prime", kw: 1600, kva: 2000 },
  { model: "IGP-2500 T NG", application: "Prime", kw: 2000, kva: 2500 },
  { model: "IGP-3125 T NG", application: "Prime", kw: 2500, kva: 3125 },
];

const SixPage = () => {
  return (
    <div className="p-4 sm:p-10 bg-gradient-to-r from-red-500 to-orange-400">
      <h2 className="text-2xl sm:text-5xl font-bold text-center mb-6 text-white">Gas Genset Models</h2>
      <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200">
        <table className="min-w-full text-sm text-center border-collapse">
          <thead className="bg-[#f79a1f] text-white uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3 border">Genset Model</th>
              <th className="px-4 py-3 border">Application</th>
              <th className="px-4 py-3 border">Power Rating (kW)</th>
              <th className="px-4 py-3 border">Power Rating (kVA)</th>
               
            </tr>
          </thead>
          <tbody>
            {gensetData.map((item, index) => (
              <tr key={index} className="bg-white even:bg-gray-100 text-black">
                <td className="px-4 py-2 border font-semibold">{item.model}</td>
                <td className="px-4 py-2 border">{item.application}</td>
                <td className="px-4 py-2 border">{item.kw}</td>
                <td className="px-4 py-2 border">{item.kva}</td>
                 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SixPage;
