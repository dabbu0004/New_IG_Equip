import React from "react";

export default function SevenPage() {
  return (
    <section className="bg-gradient-to-r from-red-500 to-orange-400 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-8">
          Features Overview
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-200 text-gray-700 uppercase">
              <tr>
                <th className="p-4 border">Environmental Conditions</th>
                <th className="p-4 border">AC Protection</th>
                <th className="p-4 border">Operator / Display / Other Data</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-orange-200 text-gray-900 align-top">
                <td className="p-4 border">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Control boards potted for environmental protection.</li>
                    <li>Ambient operating temperature from -40 to +70 ºC.</li>
                    <li>Operating altitude up to 4000 m.</li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Field overload.</li>
                    <li>Over current warning and shutdown.</li>
                    <li>Over and under voltage shutdown.</li>
                    <li>Over and under frequency shutdown.</li>
                    <li>Over excitation (loss of sensing) fault.</li>
                    <li>Integrated digital electronic voltage regulator.</li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Manual off switch.</li>
                    <li>
                      LED lamps for GenSet running, shutdown, warning, etc.
                    </li>
                    <li>
                      Alphanumeric display with pushbuttons for engine/alternator data.
                    </li>
                    <li>Fault history and GenSet model data.</li>
                    <li>RS485 Modbus interface.</li>
                    <li>Start attempts, starts, running hours.</li>
                    <li>Data logging and fault simulation.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
