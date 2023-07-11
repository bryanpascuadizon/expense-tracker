import React from "react";

const ListOfTransactions = () => {
  return (
    <>
      <div className="expense_item">
        <p className="font-bold mb-3 text-xl">List of Transactions</p>
        {/* <div className="expense_data_item">
          <div className="expense_icon_panel">
            <p className="material-symbols-outlined">payments</p>
          </div>
          <div className="expense_left_panel">
            <p className="expense_item_title">Aquaflask</p>
            <p className="expense_item_tag text-violet-500">Home</p>
          </div>
          <div className="expense_right_panel">
            <p className="expense_item_price">₱ 2,700</p>
            <p className="expense_item_date">Feb, 03</p>
          </div>
        </div>
        <div className="expense_data_item">
          <div className="expense_icon_panel">
            <p className="material-symbols-outlined">payments</p>
          </div>
          <div className="expense_left_panel">
            <p className="expense_item_title">Aquaflask</p>
            <p className="expense_item_tag text-violet-500">Home</p>
          </div>
          <div className="expense_right_panel">
            <p className="expense_item_price">₱ 2,700</p>
            <p className="expense_item_date">Feb, 03</p>
          </div>
        </div>
        <div className="expense_data_item">
          <div className="expense_icon_panel">
            <p className="material-symbols-outlined">payments</p>
          </div>
          <div className="expense_left_panel">
            <p className="expense_item_title">Aquaflask</p>
            <p className="expense_item_tag text-violet-500">Home</p>
          </div>
          <div className="expense_right_panel">
            <p className="expense_item_price">₱ 2,700</p>
            <p className="expense_item_date">Feb, 03</p>
          </div>
        </div>
        <div className="expense_data_item">
          <div className="expense_icon_panel">
            <p className="material-symbols-outlined">payments</p>
          </div>
          <div className="expense_left_panel">
            <p className="expense_item_title">Aquaflask</p>
            <p className="expense_item_tag text-violet-500">Home</p>
          </div>
          <div className="expense_right_panel">
            <p className="expense_item_price">₱ 2,700</p>
            <p className="expense_item_date">Feb, 03</p>
          </div>
        </div>
        <div className="expense_data_item">
          <div className="expense_icon_panel">
            <p className="material-symbols-outlined">payments</p>
          </div>
          <div className="expense_left_panel">
            <p className="expense_item_title">Aquaflask</p>
            <p className="expense_item_tag text-violet-500">Home</p>
          </div>
          <div className="expense_right_panel">
            <p className="expense_item_price">₱ 2,700</p>
            <p className="expense_item_date">Feb, 03</p>
          </div>
        </div>
        <div className="expense_data_item">
          <div className="expense_icon_panel">
            <p className="material-symbols-outlined">payments</p>
          </div>
          <div className="expense_left_panel">
            <p className="expense_item_title">Aquaflask</p>
            <p className="expense_item_tag text-violet-500">Home</p>
          </div>
          <div className="expense_right_panel">
            <p className="expense_item_price">₱ 2,700</p>
            <p className="expense_item_date">Feb, 03</p>
          </div>
        </div> */}
        <table className="expense_table table-auto w-full">
          <thead className="expense_thead">
            <tr>
              <th className="text-md">Title</th>
              <th className="text-md">Amount</th>
              <th className="text-md">Date of Transaction</th>
              <th className="text-md">Type</th>
              <th className="text-md">Tag</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="text-sm text-center p-2">Aquaflask</td>
              <td className="text-sm text-center p-2">₱ 200</td>
              <td className="text-sm text-center p-2">Feb 03, 2023</td>
              <td className="text-sm text-center p-2">Cash</td>
              <td className="text-sm text-center p-2 text-violet-500">Home</td>
            </tr>
            <tr className="">
              <td className="text-sm text-center p-2">Medicines</td>
              <td className="text-sm text-center p-2">₱ 200</td>
              <td className="text-sm text-center p-2">Feb 03, 2023</td>
              <td className="text-sm text-center p-2">Cash</td>
              <td className="text-sm text-center p-2 text-red-500">Health</td>
            </tr>
            <tr className="">
              <td className="text-sm text-center p-2">Pet Food</td>
              <td className="text-sm text-center p-2">₱ 200</td>
              <td className="text-sm text-center p-2">Feb 03, 2023</td>
              <td className="text-sm text-center p-2">Cash</td>
              <td className="text-sm text-center p-2 text-green-500">Food</td>
            </tr>
            <tr className="">
              <td className="text-sm text-center p-2">Fruits and Vegetables</td>
              <td className="text-sm text-center p-2">₱ 200</td>
              <td className="text-sm text-center p-2">Feb 03, 2023</td>
              <td className="text-sm text-center p-2">Cash</td>
              <td className="text-sm text-center p-2 text-blue-500">Fod</td>
            </tr>
            <tr className="">
              <td className="text-sm text-center p-2">Aquaflask</td>
              <td className="text-sm text-center p-2">₱ 200</td>
              <td className="text-sm text-center p-2">Feb 03, 2023</td>
              <td className="text-sm text-center p-2">Cash</td>
              <td className="text-sm text-center p-2 text-violet-500">Home</td>
            </tr>
            <tr className="">
              <td className="text-sm text-center p-2">Medicines</td>
              <td className="text-sm text-center p-2">₱ 200</td>
              <td className="text-sm text-center p-2">Feb 03, 2023</td>
              <td className="text-sm text-center p-2">Cash</td>
              <td className="text-sm text-center p-2 text-red-500">Health</td>
            </tr>
            <tr className="">
              <td className="text-sm text-center p-2">Pet Food</td>
              <td className="text-sm text-center p-2">₱ 200</td>
              <td className="text-sm text-center p-2">Feb 03, 2023</td>
              <td className="text-sm text-center p-2">Cash</td>
              <td className="text-sm text-center p-2 text-green-500">Food</td>
            </tr>
            <tr className="">
              <td className="text-sm text-center p-2">Fruits and Vegetables</td>
              <td className="text-sm text-center p-2">₱ 200</td>
              <td className="text-sm text-center p-2">Feb 03, 2023</td>
              <td className="text-sm text-center p-2">Cash</td>
              <td className="text-sm text-center p-2 text-blue-500">Fod</td>
            </tr>
            <tr className="">
              <td className="text-sm text-center p-2">Aquaflask</td>
              <td className="text-sm text-center p-2">₱ 200</td>
              <td className="text-sm text-center p-2">Feb 03, 2023</td>
              <td className="text-sm text-center p-2">Cash</td>
              <td className="text-sm text-center p-2 text-violet-500">Home</td>
            </tr>
            <tr className="">
              <td className="text-sm text-center p-2">Medicines</td>
              <td className="text-sm text-center p-2">₱ 200</td>
              <td className="text-sm text-center p-2">Feb 03, 2023</td>
              <td className="text-sm text-center p-2">Cash</td>
              <td className="text-sm text-center p-2 text-red-500">Health</td>
            </tr>
            <tr className="">
              <td className="text-sm text-center p-2">Pet Food</td>
              <td className="text-sm text-center p-2">₱ 200</td>
              <td className="text-sm text-center p-2">Feb 03, 2023</td>
              <td className="text-sm text-center p-2">Cash</td>
              <td className="text-sm text-center p-2 text-green-500">Food</td>
            </tr>
            <tr className="">
              <td className="text-sm text-center p-2">Fruits and Vegetables</td>
              <td className="text-sm text-center p-2">₱ 200</td>
              <td className="text-sm text-center p-2">Feb 03, 2023</td>
              <td className="text-sm text-center p-2">Cash</td>
              <td className="text-sm text-center p-2 text-blue-500">Fod</td>
            </tr>
            <tr className="">
              <td className="text-sm text-center p-2">Aquaflask</td>
              <td className="text-sm text-center p-2">₱ 200</td>
              <td className="text-sm text-center p-2">Feb 03, 2023</td>
              <td className="text-sm text-center p-2">Cash</td>
              <td className="text-sm text-center p-2 text-violet-500">Home</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListOfTransactions;
