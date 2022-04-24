import React from "react";
import get from "lodash/get";
import hash from "object-hash";
import PropTypes from "prop-types";

const TableBody = ({ data, columns, onRowClick }) => {
  const renderCell = (item, column) => {
    return get(item, column.selector);
  };

  const createKey = (item, column) => {
    return column.selector + "_" + hash(item);
  };

  return (
    <tbody>
      {data &&
        data.map((item) => (
          <tr key={hash(item)} onClick={() => onRowClick && onRowClick(item)}>
            {columns.map((column) => (
              <td key={createKey(item, column)}>{renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  onRowClick: PropTypes.func,
};

export default TableBody;
