import { capitalizeFirstLetter } from "../../utils/helpers";

const TableBody = ({ tableData, columns, totalCharacter, sumOfHeight, heightToCm, heightToInches }) => {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }) => {
              const tData = data[accessor] ? data[accessor] : "——";
              return <td key={accessor} className="table-data">{capitalizeFirstLetter(tData)}</td>;
            })}
          </tr>
        );
      })}
      <tr>
        <td className="table-bottom">{totalCharacter} Characters</td>
        <td></td>
        <td className="table-bottom">{`${sumOfHeight} cm (${Math.round(heightToCm)} ft/${(heightToInches.toFixed(2))} in)`}</td>
      </tr>
    </tbody>
  );
};

export default TableBody;
