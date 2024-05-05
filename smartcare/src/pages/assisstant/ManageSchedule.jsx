import { useRef } from "react";
import Layout from "../../components/layouts";
import { debounce } from "../../utils/utils";

function ManageSchedule() {
  const schedule = useRef({
    9: {
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
    },
    11: {
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
    },
    13: {
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
    },
    17: {
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
    },
  });

  const getHours = Object.keys(schedule.current);
  const getDayOfWeek = Object.keys(schedule.current?.[getHours[0]]);

  const handleChangeWithDebounce = debounce((e, item) => {
    if (e.target.textContent.trim() !== item) {
      e.target.style.color = "red";
    } else {
      e.target.style.color = "";
    }
  }, 3000);
  return (
    <Layout heading={"Quản lý lịch ăn"} type={2}>
      <div className="shadow p-[12px] mt-[20px] bg-[#ccc]">
        <table style={{ borderCollapse: "separate", borderSpacing: "8px" }}>
          <thead>
            <tr>
              <th width="50px"></th>
              {getDayOfWeek?.length > 0 &&
                getDayOfWeek.map((day, index) => (
                  <th
                    key={index}
                    className="py-2 px-3 sticky top-0"
                    align="center"
                  >
                    {day}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {getHours?.length > 0 &&
              getHours.map((hour, index) => (
                <tr
                  key={hour + "-" + index}
                  className="py-2 px-3 sticky top-0"
                  align="center"
                >
                  <td>{hour}</td>
                  {Object.keys(schedule.current[hour]).length > 0 &&
                    Object.keys(schedule.current[hour]).map((i, index) => {
                      return (
                        <td
                          key={hour + "-" + i}
                          className="w-[160px] h-[100px] bg-[#fff]"
                        >
                          {/* {i.split(",").map((item, itemIndex) => (
                              <span
                                key={hour + "-" + i + "-" + itemIndex}
                                contenteditable="true"
                                onInput={(e) => {
                                  handleChangeWithDebounce(e, item);
                                }}
                              >
                                {item}
                                {itemIndex !==
                                  i.split(",").length - 1 && (
                                  <br />
                                )}
                              </span>
                            ))} */}

                          <p
                          className="text-left p-[10px]"
                            key={hour + "-" + i}
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            onInput={(e) => {
                              handleChangeWithDebounce(
                                e,
                                schedule.current[hour][i]
                              );
                            }}
                          >
                            {schedule.current[hour][i]}
                          </p>
                        </td>
                      );
                    })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default ManageSchedule;
