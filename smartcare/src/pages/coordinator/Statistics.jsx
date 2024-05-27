import Chart from "react-apexcharts";
import { FaUser } from "react-icons/fa";
import Layout from "../../components/layouts";
import withLayout from "../../components/layouts";

function Stats() {
  const chartConfig1 = {
    type: "pie",
    width: 500,
    height: 280,
    series: [25, 55, 20],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      labels: ["Lớp bé", "Lớp nhỡ", "Lớp lớn"],
      colors: ["#DA9F0A", "#EA8484", "#8D31E9"],
      legend: {
        show: true,
        position: "bottom",
        markers: {
          width: 50,
          height: 30,
          strokeWidth: 0,
          strokeColor: "#fff",
          radius: 0,
        },
      },
    },
  };
  const chartConfig2 = {
    type: "area",
    width: 500,
    height: 280,
    series: [
      {
        name: "Tổng tiền",
        data: [1500, 1418, 1456, 1526, 1356, 1256, 2800],
        color: "#1A56DB",
      },
      {
        name: "Tổng phí",
        data: [643, 413, 765, 412, 1423, 1731, 2200],
        color: "#7E3BF2",
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: false,
        },
      },
      title: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        labels: {
          show: true,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        stepSize: 500,
        labels: {
          formatter: function (value) {
            return value + "K";
          },
        },
      },
    },
  };
  return (
    
      <div className="shadow p-[12px] mt-[20px] border">
        <div className="inline-flex w-[250px] justify-between items-center shadow py-[8px] px-[16px] mx-[32px]">
          <FaUser className="inline-block mr-[32px] text-[32px] mx-[8px]" />
          <div className="text-center inline-block">
            <p>Chưa thanh toán</p>
            <span>{Number(10000000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
          </div>
        </div>
        <div className="inline-flex w-[250px] justify-between items-center shadow py-[8px] px-[16px] mx-[32px]">
          <FaUser className="inline-block mr-[32px] text-[32px] mx-[8px]" />
          <div className="text-center inline-block">
            <p>Đã thanh toán</p>
            <span>{Number(20000000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
          </div>
        </div>
        <div className="inline-flex w-[250px] justify-between items-center shadow py-[8px] px-[16px] mx-[32px]">
          <FaUser className="inline-block mr-[32px] text-[32px] mx-[8px]" />
          <div className="text-center inline-block">
            <p>Tổng</p>
            <span>{Number(30000000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
          </div>
        </div>
        <div className="flex mt-[40px]">
          <div className="w-[50%]">
            <h6 className="mb-[20px]">Thống kê tiền ăn từng khối</h6>
            <Chart {...chartConfig1}/>
          </div>
          <div className="w-[50%]">
            <div className="mb-[20px]">
              <h6>Thu được</h6>
            </div>
            <Chart {...chartConfig2} />
          </div>
        </div>
      </div>
  );
}

export default withLayout(Stats, "Thống kê", 2, () => {});

