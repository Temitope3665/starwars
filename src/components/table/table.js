import { useSortableTable } from "../../hooks/useSortTable";
import TableBody from "./tableBody";
import TableHead from "./tableHead";

const Table = ({ caption, data, columns }) => {
    const [tableData, handleSorting] = useSortableTable(data);

  return (
    <>
      <table className="table">
        <caption>{caption}</caption>
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody columns={columns} tableData={tableData} />
      </table>
    </>
  );
};

export default Table;
