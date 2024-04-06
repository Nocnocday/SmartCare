Table.defaultProps = {};
function Table({ colummns, datas, columnAction }) {
  return (
    <div className="">
      <div className="overflow-x-auto rounded-lg overflow-y-auto relative">
        <table className="border-collapse table-auto w-full whitespace-no-wrap table-striped relative">
          <thead>
            <tr className="center">
              <th className="py-2 px-3 sticky top-0" align="center">STT</th>
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
                        {data[colummns[i].value]}
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
    </div>
  );
}

export default Table;
