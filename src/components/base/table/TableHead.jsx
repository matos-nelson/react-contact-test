import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

const TableHead = ({ className, columns, sortColumn, onSort }) => {
  const [columnToSort, setColumnToSort] = useState({});

  useEffect(() => {
    const INITIAL_STATE = { selector: "", order: "" };
    setColumnToSort(sortColumn || INITIAL_STATE);
  }, [sortColumn, columns]);

  const raiseSort = (selector) => {
    if (!onSort) {
      return;
    }

    const targetColumn = { ...columnToSort };
    if (targetColumn.selector === selector) {
      targetColumn.order = targetColumn.order === "asc" ? "desc" : "asc";
    } else {
      targetColumn.selector = selector;
      targetColumn.order = "asc";
    }

    setColumnToSort(targetColumn);
    onSort(targetColumn);
  };

  const renderSortIcon = (column) => {
    if (column.selector !== columnToSort.selector) {
      return null;
    }

    return columnToSort.order === "asc" ? (
      <FontAwesomeIcon icon={faSortUp} />
    ) : (
      <FontAwesomeIcon icon={faSortDown} />
    );
  };

  return (
    <thead className={className || ""}>
      <tr>
        {columns.map((column) => (
          <th
            key={column.selector}
            onClick={() => raiseSort(column.selector)}
            className="clickable"
          >
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.array.isRequired,
  sortColumn: PropTypes.object,
  onSort: PropTypes.func,
};

export default TableHead;
