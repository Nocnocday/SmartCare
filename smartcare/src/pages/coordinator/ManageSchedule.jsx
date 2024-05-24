import moment from "moment";
import "moment/locale/vi.js";
import { useEffect, useRef, useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { schedule } from "../../services";
import { getWeekNumber } from "../../utils/utils";
import withLayout from "../../components/layouts/index";

moment.locale("vi");

function ManageSchedule() {
  const [mealSchedule, setMealSchedule] = useState([]);
  const week = useRef();
  const divRef = useRef();
  const tableRef = useRef();

  useEffect(() => {
    try {
      (async () => {
        const res = await schedule();
        setMealSchedule(res);
      })();
    } catch (err) {}
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const currentWeek = getWeekNumber(currentDate);
    week.current.querySelector("strong").textContent = currentWeek;

    const headerTag = document.querySelector(".header");
    const wHeight = window.innerHeight;
    const py = 40;
    const heightTable = wHeight - py - headerTag.offsetHeight - 15;
    divRef.current.style.height = heightTable + "px";

    tableRef.current.style.height =
      heightTable - divRef.current.querySelector("ul").offsetHeight - 24 + "px";
  }, []);

  const handleChangeWeek = (i) => {
    const currentWeek = parseInt(
      week.current.querySelector("strong").textContent
    );

    if (i === 0) {
      week.current.querySelector("strong").innerText = currentWeek - 1;
    }

    if (i === 1) {
      week.current.querySelector("strong").innerText = currentWeek + 1;
    }
  };

  const renderSchedule =
    mealSchedule?.length > 0 ? (
      mealSchedule.map((schedule) => {
        const scheduleMorning = schedule.morning?.split(",");
        const scheduleAfternoon = schedule.afternoon.split(",");
        const scheduleNoon = schedule.noon?.split(",");
        return (
          <div key={schedule.id} className="flex-1 py-4">
            <div className="text-center mb-2 h-[60px]">
              <h5 className="text-lg font-semibold">
                <strong>{moment(schedule.date).format("dddd")}</strong>
              </h5>
              <span className="text-gray-500">
                {moment(schedule.date).format("DD/MM/YYYY")}
              </span>
            </div>
            <div
              className="flex flex-col"
              style={{ height: "calc(100% - 60px)" }}
            >
              <div className="h-[33%]">
                {[
                  ...scheduleMorning,
                  ...Array(4 - scheduleMorning?.length).fill(""),
                ]?.map((item, index) => (
                  <div
                    key={index}
                    className="border-t border-l h-[25%] text-center"
                    style={{
                      background: `${
                        moment().format("DD/MM/YYYY") ==
                        moment(schedule.date).format("DD/MM/YYYY")
                          ? "red"
                          : "transparent"
                      }`,
                    }}
                  >
                    {index === 0 ? item : <>{item}</>}
                  </div>
                ))}
              </div>
              <div className="h-[33%]">
                {[
                  ...scheduleAfternoon,
                  ...Array(4 - scheduleAfternoon?.length).fill(""),
                ]?.map((item, index) => (
                  <div
                    key={index}
                    className="border-t border-l h-[25%] text-center"
                    style={{
                      background: `${
                        moment().format("DD/MM/YYYY") ==
                        moment(schedule.date).format("DD/MM/YYYY")
                          ? "red"
                          : "transparent"
                      }`,
                    }}
                  >
                    {index === 0 ? item : <>{item}</>}
                  </div>
                ))}
              </div>
              <div className="h-[33%]">
                {[
                  ...scheduleNoon,
                  ...Array(4 - scheduleNoon?.length).fill(""),
                ]?.map((item, index) => (
                  <div
                    key={index}
                    className="border-t border-l h-[25%] text-center"
                    style={{
                      background: `${
                        moment().format("DD/MM/YYYY") ==
                        moment(schedule.date).format("DD/MM/YYYY")
                          ? "red"
                          : "transparent"
                      }`,
                    }}
                  >
                    {index === 0 ? item : <>{item}</>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="text-center text-gray-500">
        Không có lịch trình nào được tìm thấy.
      </div>
    );

  return (
    <div className="shadow p-[12px] " ref={divRef}>
      <ul className="flex justify-center items-center">
        <li>
          <span
            className="p-[8px] mx-[4px] inline-block w-[16px] h-[16px] box-content rounded-full text-center cursor-pointer"
            onClick={() => {
              handleChangeWeek(0);
            }}
          >
            <GrFormPreviousLink className="text-sidebar" />
          </span>
        </li>
        <li className="text-center" ref={week}>
          <h5 className="text-[18px]">
            Tuần <strong></strong>
          </h5>
        </li>
        <li>
          <span
            className="p-[8px] mx-[4px] inline-block w-[16px] h-[16px] box-content rounded-full text-center cursor-pointer"
            onClick={() => {
              handleChangeWeek(1);
            }}
          >
            <GrFormNextLink className="text-sidebar" />
          </span>
        </li>
      </ul>
      <div className="flex justify-between" ref={tableRef}>
        {mealSchedule?.length > 0 && (
          <div className="p-4">
            <div className="text-center mb-2 h-[60px]"></div>
            <div
              className="flex flex-col"
              style={{ height: "calc(100% - 60px)" }}
            >
              <div className="flex items-center h-[33%] font-semibold">
                Sáng
              </div>
              <div className="flex items-center h-[33%] font-semibold">
                Chiều
              </div>
              <div className="flex items-center h-[33%] font-semibold">Tối</div>
            </div>
          </div>
        )}

        {renderSchedule}
      </div>
    </div>
  );
}

export default withLayout(ManageSchedule, "Quản lý lịch ăn", 2, () => {});
