/* eslint-disable jsx-a11y/no-distracting-elements */
import { useSortableTable } from "../../hooks/useSortTable";
import TableBody from "./tableBody";
import TableHead from "./tableHead";

const TableComp = ({ caption, data, columns, totalCharacter, sumOfHeight, heightToInches, heightToCm }) => {
  const [tableData, handleSorting] = useSortableTable(data);

  return (
    <>
    <div className="caption-wrapper">
      <marquee className="caption">{caption}</marquee>
    </div>
      <table className="table">
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody
          columns={columns}
          tableData={tableData}
          totalCharacter={totalCharacter}
          sumOfHeight={sumOfHeight}
          heightToCm={heightToCm}
          heightToInches={heightToInches}
        />
      </table>
    </>
  );
};

export default TableComp;
