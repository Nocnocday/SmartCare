import { useRef } from "react";
import Layout from "../../components/layouts";
import { debounce } from "../../utils/utils";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

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
  const week = useRef()

  const getHours = Object.keys(schedule.current);
  const getDayOfWeek = Object.keys(schedule.current?.[getHours[0]]);

  const handleChangeWithDebounce = debounce((e, item) => {
    if (e.target.textContent.trim() !== item) {
      e.target.style.color = "red";
    } else {
      e.target.style.color = "";
    }
  }, 3000);

  const handlePrev = ()=>{
    const today = new Date(); // Lấy ngày hiện tại
    const dayOfWeek = today.getDay(); // Lấy thứ của ngày hiện tại (0 là Chủ nhật, 1 là Thứ 2, ..., 6 là Thứ 7)
    const daysUntilNextWeek = 7 - dayOfWeek; // Số ngày cần thêm để đến tuần mới
    const firstDayOfNextWeek = new Date(today);
  }
  const handleNext = ()=>{
    console.log(week.current.querySelector('h5'));
    console.log(week.current.querySelector('p'));
  }
  
  return (
    <Layout heading={"Quản lý lịch ăn"} type={2}>
      <div className="shadow p-[12px] mt-[20px] bg-[#ccc]">
        <ul className="flex justify-center">
          <li>
            <span
              className="p-[8px] mx-[4px] inline-block w-[16px] h-[16px] box-content rounded-full text-center cursor-pointer"
              onClick={handlePrev}
            >
              <GrFormPreviousLink className="text-sidebar" />
            </span>
          </li>
          <li className="text-center" ref={week}>
            <h5 className="text-[18px]">Tuần 25</h5>
            <p className="text-[14px]">(6 - 11/05/2024)</p>
          </li>
          <li>
            <span
              className="p-[8px] mx-[4px] inline-block w-[16px] h-[16px] box-content rounded-full text-center cursor-pointer"
              onClick={handleNext}
            >
              <GrFormNextLink className="text-sidebar" />
            </span>
          </li>
        </ul>
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
