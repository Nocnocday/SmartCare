import { Button, Input } from "../../components/atoms";
import Select from "../../components/atoms/select";
import withLayout from "../../components/layouts";

function CreateAccount() {
  return (
      <div className="shadow p-[12px] mt-[20px]">
        <div className=" flex flex-wrap">
          <div className="mb-[20px] w-[25%] px-[8px]">
            <label htmlFor="firstName" className="font-bold">
              Họ <span className="required">*</span>
            </label>
            <Input
              placeholder="Họ"
              id="firstName"
              className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
            />
          </div>
          <div className="mb-[20px] w-[25%] px-[8px]">
            <label htmlFor="lastname" className="font-bold">
              Tên <span className="required">*</span>
            </label>
            <Input
              placeholder="Tên"
              id="lastname"
              className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
            />
          </div>
          <div className="mb-[20px] w-[25%] px-[8px]">
            <label htmlFor="role" className="font-bold">
              Loại người dùng <span className="required">*</span>
            </label>
            <Select
              classSelect="w-[100%] mt-[8px] h-[40px]"
              datas={[
                { key: "0", value: "Admin" },
                { key: "1", value: "Điều hướng viên" },
                { key: "2", value: "Giáo viên" },
                { key: "3", value: "Học sinh" },
              ]}
            />
          </div>
          <div className="mb-[20px] w-[25%] px-[8px]">
            <label htmlFor="gender" className="font-bold">
              Giới tính <span className="required">*</span>
            </label>
            <Select
              classSelect="w-[100%] mt-[8px] h-[40px]"
              datas={[
                { key: "0", value: "Nam" },
                { key: "1", value: "Nữ" },
              ]}
            />
          </div>
          <div className="mb-[20px] w-[25%] px-[8px]">
            <label htmlFor="fullnameDad" className="font-bold">
              Họ tên bố <span className="required">*</span>
            </label>
            <Input
              placeholder="Họ tên bố"
              id="fullnameDad"
              className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
            />
          </div>
          <div className="mb-[20px] w-[25%] px-[8px]">
            <label htmlFor="fullnameMom" className="font-bold">
              Họ tên mẹ <span className="required">*</span>
            </label>
            <Input
              placeholder="Họ tên mẹ"
              id="fullnameMom"
              className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
            />
          </div>
          <div className="mb-[20px] w-[25%] px-[8px]">
            <label htmlFor="birthday" className="font-bold">
              Ngày sinh <span className="required">*</span>
            </label>
            <Input
              placeholder="Ngày sinh"
              type="date"
              id="birthday"
              max="2024-05-03"
              className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
            />
          </div>
          <div className="mb-[20px] w-[25%] px-[8px]">
            <label htmlFor="join_date" className="font-bold">
              Ngày vào <span className="required">*</span>
            </label>
            <Input
              placeholder="Ngày vào"
              type="date"
              id="join_date"
              max="2024-05-03"
              className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
            />
          </div>
          <div className="mb-[20px] w-[25%] px-[8px]">
            <label htmlFor="address" className="font-bold">
              Địa chỉ <span className="required">*</span>
            </label>
            <Input
              placeholder="Địa chỉ"
              id="address"
              className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
            />
          </div>
          <div className="mb-[20px] w-[25%] px-[8px]">
            <label htmlFor="phoneNumber" className="font-bold">
              Số điện thoại <span className="required">*</span>
            </label>
            <Input
              placeholder="Số điện thoại"
              id="phoneNumber"
              className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
            />
          </div>
          <div className="mb-[20px] w-[25%] px-[8px]">
            <label htmlFor="ID" className="font-bold">
              ID <span className="required">*</span>
            </label>
            <Input
              placeholder="ID"
              id="ID"
              className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
            />
          </div>
          <div className="mb-[20px] w-[25%] px-[8px]">
            <label className="font-bold">
              Lớp <span className="required">*</span>
            </label>
            <Select
              classSelect="w-[100%] mt-[8px] h-[40px]"
              datas={[
                { key: "0", value: "Lớp mầm" },
                { key: "1", value: "Lớp lá" },
                { key: "2", value: "Lớp lớn" },
              ]}
            />
          </div>
          <div className="mb-[40px] w-[25%] px-[8px]">
            <label htmlFor="Email" className="font-bold">
              Email <span className="required">*</span>
            </label>
            <Input
              placeholder="Email"
              id="Email"
              className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
            />
          </div>
        </div>
        <Button style={{ display: "block", margin: "auto" }}>
          Tạo tài khoản
        </Button>
      </div>
  );
}

export default withLayout(CreateAccount, "Tạo Tài Khoản", 2, () => {});
