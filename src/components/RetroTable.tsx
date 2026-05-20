import { catalog } from "../constants/catalog"

export function RetroTable() {
	return (
		<table
      width="100%"
      cellPadding="4"
      cellSpacing="0"
      border={1}
      className="border-collapse border border-[#808080] text-sm">

      <thead>
        <tr className="bg-[#e0e0e0]">
          <th align="left" className="border border-[#808080] p-2">
            Title
          </th>
          <th align="left" className="border border-[#808080] p-2">
            Publication
          </th>
          <th
            align="center"
            className="border border-[#808080] p-2">

            Year
          </th>
        </tr>
      </thead>
      <tbody>
      	{catalog.map((piece, index) => (
      		<tr key={index}>
            <td className="border border-[#808080] p-2">
              "{pice.title}"
            </td>
            <td className="border border-[#808080] p-2">
              <i>{piece.publication}</i>
            </td>
            <td
              align="center"
              className="border border-[#808080] p-2">

              {piece.year}
            </td>
          </tr>
      	))}
      </tbody>
    </table>
	);
}
