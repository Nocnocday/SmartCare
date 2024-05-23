import { useEffect, useRef, useState } from "react";
import Pagination from "./pagination";

Table.defaultProps = {};
function Table({
  renderCssCustom = () => {},
  checkbox,
  colummns,
  datas,
  columnAction,
  search,
  handlePaid,
  styleTable = {},
  totalPages = 0,
  onPageChange,
}) {
  console.log(datas);
  const tableRef = useRef();
  const [listChecked, setListChecked] = useState(new Array(10).fill(false));
  useEffect(() => {
    const headerTag = document.querySelector(".header");
    const pagiDiv = document.querySelector(".pagination");
    const wHeight = window.innerHeight;
    const py = 40; // padding section-right
    const heightTable =
      wHeight - py - headerTag.offsetHeight - pagiDiv.offsetHeight - 15;
    tableRef.current.style.height = heightTable + "px";
  });

  const handleChange = (e) => {
    setListChecked(new Array(10).fill(e.target.checked));
  };
  return (
    <>
      <div
        ref={tableRef}
        className="overflow-auto rounded-lg relative rounded-lg shadow bg-[#fafafa] custom-scrollbar"
      >
        {search && search}

        <table
          className="border-collapse table-auto whitespace-no-wrap table-striped absolute"
          style={{ width: "max-content", ...styleTable }}
        >
          <thead>
            <tr className="center">
              {checkbox && (
                <th
                  className="py-2 px-3 sticky top-0  bg-[#fff]"
                  align="center"
                >
                  <input
                    type="checkbox"
                    className="outline-none"
                    onChange={handleChange}
                  />
                </th>
              )}
              {/* <th className="py-2 px-3 sticky top-0 bg-[#fff]" align="center">
                STT
              </th> */}
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
              {columnAction?.length > 0 && (
                <th
                  className="py-2 px-3 sticky top-0  bg-[#fff]"
                  colSpan={2}
                  align="center"
                ></th>
              )}
            </tr>
          </thead>
          <tbody>
            {datas?.length > 0 &&
              datas.map((data, index) => {
                const listTd = [];
                let i = 0;
                for (const item in data) {
                  if (Object.hasOwnProperty.call(data, item)) {
                    listTd.push(
                      <td className="py-2 px-3" align={colummns[i]?.align}>
                        {colummns[i]?.type == "image" ? (
                          <img
                            src={data[colummns[i]?.value]}
                            alt=""
                            className="w-[60px] h-[60px]"
                          />
                        ) : (
                          <>
                            {colummns[i]?.customCss ? (
                              <div
                                className={renderCssCustom(
                                  data[colummns[i]?.value]
                                )}
                                onClick={handlePaid}
                              >
                                {data[colummns[i]?.value]}
                              </div>
                            ) : (
                              data[colummns[i]?.value]
                            )}
                          </>
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
                  <tr
                    key={data.id}
                    className={(index + 1) % 2 == 0 ? "bg-[#fff]" : ""}
                  >
                    {checkbox && (
                      <td align="center">
                        <input
                          type="checkbox"
                          checked={listChecked[index]}
                          onChange={(e) => {
                            const check = e.target.checked;
                            listChecked[index] = check;
                            setListChecked([...listChecked]);
                          }}
                        />
                      </td>
                    )}
                    {/* <td align="center">{index + 1}</td> */}
                    {listTd}
                    <td colspan="2">{colAction}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="pt-[10px] pagination">
        <Pagination totalPages={totalPages} onPageChange={onPageChange} />
      </div>
    </>
  );
}

export default Table;
