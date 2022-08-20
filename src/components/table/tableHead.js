import { useState } from "react";
import { default_sort, down_sort, up_sort } from "../../assets/svg/svgs";

const TableHead = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }) => {
          const cl = sortable
            ? sortField === accessor && order === "asc"
              ? up_sort
              : sortField === accessor && order === "desc"
              ? down_sort
              : default_sort
            : "";
          return (
            <th
              key={accessor}
              onDoubleClick={sortable ? () => handleSortingChange(accessor) : null}
            >
              <div className="label">
                {label.toUpperCase()}
                <div className="label-icon">{cl}</div>
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
