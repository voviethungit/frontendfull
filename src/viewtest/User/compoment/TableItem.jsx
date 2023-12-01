// TableItem.jsx
import React from 'react';

const TableItem = ({ carName, startDate, endDate, totalAmount }) => {
  return (
    <tr>
      <td>{carName}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td>{totalAmount}</td>
    </tr>
  );
};

export default TableItem;
