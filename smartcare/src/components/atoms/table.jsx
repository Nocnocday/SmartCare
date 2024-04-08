import Pagination from "./pagination";

Table.defaultProps = {};
function Table({ colummns, datas, columnAction }) {
  return (
    <div className="">
      <div className="rounded-lg relative  rounded-lg shadow bg-[#fafafa] h-[500px] mb-[10px]">
        <table className="border-collapse table-auto w-full whitespace-no-wrap table-striped relative">
          <thead>
            <tr className="center">
              <th className="py-2 px-3 sticky top-0" align="center">
                STT
              </th>
              {colummns?.length > 0 &&
                colummns.map((column, index) => (
                  <th
                    key={index}
                    className="py-2 px-3 sticky top-0"
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
                const listTd = [];
                let i = 0;
                for (const item in data) {
                  if (Object.hasOwnProperty.call(data, item)) {
                    // data[colummns[i].value]
                    listTd.push(
                      <td className="py-2 px-3" align={colummns[i]?.align}>
                        {colummns[i].type == "image" ? (
                          <img src={data[colummns[i].value]} alt="" className="w-[60px] h-[60px]" />
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
                            className={action.classIc}
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
      <Pagination totalPages={9} />
    </div>
  );
}

export default Table;
