import React from "react";

const VTable = () => {
  return (
    <table className="table-auto w-full text-left whitespace-no-wrap">
      <thead>
        <tr>
          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
            Volunteer Name
          </th>
          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
            Address
          </th>
          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
            Rewards
          </th>
          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
            Community Hours
          </th>
          <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-3">Ajit NGO</td>
          <td className="px-4 py-3">
            0xe3B3f5ace203d5659eEb0133dec972921ca9bB21
          </td>
          <td className="px-4 py-3 text-lg text-gray-900">Free</td>
          <td className="px-4 py-3 text-lg text-gray-900">6hrs</td>
          <td className="w-10 text-center">
            <input name="plan" type="radio" />
          </td>
        </tr>
        <tr>
          <td className="border-t-2 border-gray-200 px-4 py-3">RRJ NGO</td>
          <td className="border-t-2 border-gray-200 px-4 py-3">
            0xe3B3f5ace203d5659eEb0133dec972921ca9bB21
          </td>
          <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
            $24
          </td>
          <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
            10hrs
          </td>
          <td className="border-t-2 border-gray-200 w-10 text-center">
            <input name="plan" type="radio" />
          </td>
        </tr>
        <tr>
          <td className="border-t-2 border-gray-200 px-4 py-3">
            Tejas PIRO Coder
          </td>
          <td className="border-t-2 border-gray-200 px-4 py-3">
            0xe3B3f5ace203d5659eEb0133dec972921ca9bB21
          </td>
          <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
            $50
          </td>
          <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
            5hrs
          </td>
          <td className="border-t-2 border-gray-200 w-10 text-center">
            <input name="plan" type="radio" />
          </td>
        </tr>
        <tr>
          <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
            Ashutosh
          </td>
          <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
            0xe3B3f5ace203d5659eEb0133dec972921ca9bB21
          </td>
          <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
            $72
          </td>
          <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
            7hrs
          </td>
          <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
            <input name="plan" type="radio" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default VTable;
