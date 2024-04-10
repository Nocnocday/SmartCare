import { useEffect, useRef } from "react";
import Pagination from "./pagination";

Table.defaultProps = {};
function Table({ colummns, datas, columnAction }) {
  const tableRef = useRef();
  useEffect(() => {
    const headerTag = document.querySelector(".header");
    const pagiDiv = document.querySelector(".pagination");
    const wHeight = window.innerHeight;
    const py = 40; // padding section-right
    const heightTable =
      wHeight - py - headerTag.offsetHeight - pagiDiv.offsetHeight - 15;
    tableRef.current.style.height = heightTable + "px";
  });
  return (
    <>
      <div
        ref={tableRef}
        className="overflow-auto rounded-lg relative rounded-lg shadow bg-[#fafafa] custom-scrollbar"
      >
        <table
          className="border-collapse table-auto whitespace-no-wrap table-striped absolute"
          style={{ width: "max-content" }}
        >
          <thead>
            <tr className="center">
              <th className="py-2 px-3 sticky top-0 bg-[#fff]" align="center">
                STT
              </th>
              {colummns?.length > 0 &&
                colummns.map((column, index) => (
                  <th
                    key={index}
                    className="py-2 px-3 sticky top-0  bg-[#fff]"
                    width={column.width}
                    align="center"
                  >
                    {column.name}
                  </th>
                ))}
              {columnAction?.length > 0 &&
                columnAction.map((column, index) => (
                  <th
                    key={index}
                    className="py-2 px-3 sticky top-0"
                    width={column.width}
                    align="center"
                  ></th>
                ))}
            </tr>
          </thead>
          <tbody>
            {datas?.length > 0 &&
              datas.map((data, index) => {
                console.log(data);
                const listTd = [];
                let i = 0;
                for (const item in data) {
                  if (Object.hasOwnProperty.call(data, item)) {
                    listTd.push(
                      <td className="py-2 px-3" align={colummns[i]?.align}>
                        {colummns[i].type == "image" ? (
                          <img
                            src={data[colummns[i].value]}
                            alt=""
                            className="w-[60px] h-[60px]"
                          />
                        ) : (
                          data[colummns[i].value]
                        )}
                      </td>
                    );
                    i++;
                  }
                }
                const colAction =
                  columnAction.length > 0
                    ? columnAction.map((action, index) => {
                        const Icon = action.icon;
                        return (
                          <Icon
                            className={`mx-[5px] ${action.classIc}`}
                            onClick={action.handleClick}
                          />
                        );
                      })
                    : [];
                return (
                  <tr key={data.id}>
                    <td align="center">{index + 1}</td>
                    {listTd}
                    <td>{colAction}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="pt-[10px] pagination">
        <Pagination totalPages={1} />
      </div>
    </>
  );
}

export default Table;
