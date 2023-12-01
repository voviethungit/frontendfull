// Table.jsx
import React from 'react';
import TableItem from './TableItem';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tên Xe Đã Thuê</th>
          <th>Tổng Số Tiền</th>
          <th>Trạng Thái</th>
          <th>Xuất Hóa Đơn</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableItem
            key={index}
            carName={item.carName}
            totalAmount={item.totalAmount}
            status={item.status}
            bill={item.bill}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
