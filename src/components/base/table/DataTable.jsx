import React, { useCallback, useEffect, useState } from "react";
import orderBy from "lodash/orderBy";
import PropTypes from "prop-types";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { Pagination } from "components/base";
import { arrayUtils, objectUtils } from "utilities";

const DataTable = ({ data, columns, onRowClick }) => {
  const pageSize = 10;
  const [pagedData, setPagedData] = useState({
    data: data,
    totalCount: data.length,
    searchQuery: "",
    currentPage: 1,
    sortColumn: null,
  });

  const paginateData = useCallback(
    ({ currentPage, searchQuery, sortColumn }) => {
      let filtered = data;

      if (searchQuery) {
        filtered = data.filter(function (d) {
          return objectUtils.findValue(d, searchQuery);
        });
      }

      const sorted = sortColumn
        ? orderBy(filtered, [sortColumn.selector], [sortColumn.order])
        : filtered;
      const list = arrayUtils.paginate(sorted, currentPage, pageSize);

      return {
        data: list,
        currentPage,
        searchQuery,
        sortColumn,
        totalCount: filtered.length,
      };
    },
    [data]
  );

  useEffect(() => {
    const refreshData = {
      data,
      totalCount: data.length,
      searchQuery: "",
      currentPage: 1,
      sortColumn: null,
    };

    const paginatedData = paginateData(refreshData);
    setPagedData(paginatedData);
  }, [data, paginateData]);

  const handleSort = (sortColumn) => {
    let refreshData = { ...pagedData };
    refreshData.sortColumn = sortColumn;

    const paginatedData = paginateData(refreshData);
    setPagedData(paginatedData);
  };

  const handleSearch = ({ currentTarget: input }) => {
    let refreshData = { ...pagedData };
    refreshData.searchQuery = input.value;
    refreshData.currentPage = 1;

    const paginatedData = paginateData(refreshData);
    setPagedData(paginatedData);
  };

  const handlePageChange = (page) => {
    let refreshData = { ...pagedData };
    refreshData.currentPage = page;

    const paginatedData = paginateData(refreshData);
    setPagedData(paginatedData);
  };

  return (
    <div className="datatable_wrapper">
      <div className="row">
        <div className="col col-md-8 mb-3" />
        <div className="col col-md-4 mb-3">
          <div className="datatable_filter">
            <input
              className="form-control"
              type="search"
              placeholder="Search..."
              name="searchQuery"
              value={pagedData.searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      {data.length === 0 || pagedData.totalCount === 0 ? (
        <p className="text-center">No matching records found.</p>
      ) : (
        <React.Fragment>
          <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
              <TableHead
                columns={columns}
                sortColumn={pagedData.sortColumn}
                onSort={handleSort}
              />
              <TableBody
                data={pagedData.data}
                columns={columns}
                onRowClick={onRowClick}
              />
            </table>
          </div>
          <Pagination
            itemsCount={pagedData.totalCount}
            pageSize={pageSize}
            currentPage={pagedData.currentPage}
            onPageChange={handlePageChange}
          />
        </React.Fragment>
      )}
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  onRowClick: PropTypes.func,
};

export default DataTable;
