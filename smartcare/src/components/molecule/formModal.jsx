import { useLayoutEffect, useState } from "react";
import {
  getDistricts,
  getProvinces,
  getWards,
} from "../../services/locationServices";
import { CLASSROOM } from "../../utils/constants";
import { Input } from "../atoms";
import Select from "../atoms/select";
const ModalForm = ({ open, onClose, onAddStudent }) => {
  const [student, setStudent] = useState({
    name: "",
    parent: "",
    classroom: "",
    gender: "Nam",
    address: "",
    date: "",
    phone: "",
    email: "",
  });
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  // Call tỉnh thành phố lúc vào trang
  useLayoutEffect(() => {
    try {
      (async () => {
        const resProvinces = await getProvinces();
        if (resProvinces && resProvinces.length > 0) {
          const provinces = resProvinces?.map((province) => ({
            key: province.id,
            value: province.name,
          }));
          setProvinces(provinces);
          const resDistricts = await getDistricts(provinces?.[0].key);
          if (resDistricts && resDistricts.length > 0) {
            const districts = resDistricts.map((district) => ({
              key: district.id,
              value: district.name,
            }));
            setDistricts(districts);
            const resWards = await getWards(districts?.[0].key);
            if (resWards && resWards.length > 0) {
              const wards = resWards.map((ward) => ({
                key: ward.id,
                value: ward.name,
              }));
              setWards(wards);
            }
          }
        }
      })();
    } catch (err) {}
  }, []);

  if (!open) return null;
  const handleChange = (e) => {};

  const validateForm = () => {
    let isValid = true;
    const requiredFields = [
      "name",
      "date_of_birth",
      "gender",
      "classroom_id",
      "parent_name",
      "parent_date_of_birth",
      "parent_gender",
      "username",
      "password",
      "phone_number",
      "email",
      "province_id",
      "district_id",
      "ward_id",
      "address",
    ];
    requiredFields.forEach((field) => {
      const input = document.getElementById(field);
      if (!input.value) {
        isValid = false;
        input.classList.add("required");
      } else {
        input.classList.remove("required");
      }
    });
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let formData = new FormData(e.target);
      let data = {
        name: '',
        nickname: '',
        address: '',
        date_of_birth: '',
        email: '',
        gender: '',
        profile_image: '',
        phone_number: '',
        username: '',
        password: '',
        classroom_id: '',
        province_id: 1,
        district_id: 1,
        ward_id: 1,
        parent_name: '',
        parent_date_of_birth: '',
        parent_gender: '',
      };
      formData.forEach((value, key) => {
        if (["province_id", "district_id", "ward_id"].includes(key)) {
          data[key] = Number(value);
        } else {
          data[key] = value;
        }
      });
      onAddStudent(data);
      onClose();
    }
  };

  const handleChangeProvince = async (e) => {
    const province_id = e.target.value;
    const resDistricts = await getDistricts(province_id);
    if (resDistricts && resDistricts.length > 0) {
      const districts = resDistricts.map((district) => ({
        key: district.id,
        value: district.name,
      }));
      setDistricts(districts);
      const resWards = await getWards(districts?.[0].key);
      if (resWards && resWards.length > 0) {
        const wards = resWards.map((ward) => ({
          key: ward.id,
          value: ward.name,
        }));
        setWards(wards);
      }
    }
  };

  const handleChangeDistrict = async (e) => {
    const district_id = e.target.value;
    const resWards = await getWards(district_id);
    if (resWards && resWards.length > 0) {
      const wards = resWards.map((ward) => ({
        key: ward.id,
        value: ward.name,
      }));
      setWards(wards);
    }
  };
  const classrooms = [];
  for (const key in CLASSROOM) {
    if (Object.hasOwnProperty.call(CLASSROOM, key)) {
      classrooms.push({ key, value: CLASSROOM[key] });
    }
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div
        className="bg-white rounded-lg p-6 w-[60%] h-[80%]"
        style={{ overflow: "auto" }}
      >
        <h2 className="text-xl font-bold mb-4">Thêm học sinh mới</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-[20px] px-[8px] w-[100%] flex">
            <div className="w-[50%] px-[8px]">
              <label htmlFor="name" className="font-bold">
                Họ và tên <span className="required">*</span>
              </label>
              <Input
                value="324324234"
                placeholder="Họ và tên"
                id="name"
                name="name"
                // value={student.name}
                onChange={handleChange}
                className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
              />
            </div>
            <div className="w-[50%] px-[8px]">
              <label htmlFor="nickname" className="font-bold">
                Nick name
              </label>
              <Input
                value="324324234"
                placeholder="nickname"
                name="nickname"
                id="nickname"
                className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
              />
            </div>
          </div>
          <div className="mb-[20px] px-[8px] w-[100%] flex">
            <div className="w-[25%] px-[8px]">
              <label htmlFor="date_of_birth" className="font-bold">
                Ngày sinh <span className="required">*</span>
              </label>
              <Input
                placeholder="Ngày sinh"
                type="date"
                name="date_of_birth"
                id="date_of_birth"
                max="2024-05-03"
                className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
              />
            </div>
            <div className="w-[25%] px-[8px]">
              <label htmlFor="gender" className="font-bold">
                Giới tính <span className="required">*</span>
              </label>
              <Select
                name="gender"
                id="gender"
                classSelect="w-[100%] mt-[8px] h-[40px]"
                datas={[
                  { key: "0", value: "Nam" },
                  { key: "1", value: "Nữ" },
                ]}
              />
            </div>
            <div className="w-[50%] px-[8px]">
              <label className="font-bold">
                Lớp <span className="required">*</span>
              </label>
              <Select
                name="classroom_id"
                id="classroom_id"
                classSelect="w-[100%] mt-[8px] h-[40px]"
                datas={classrooms}
              />
            </div>
          </div>
          <div className="mb-[20px] px-[8px] w-[100%] flex">
            <div className="w-[50%] px-[8px]">
              <label htmlFor="parent_name" className="font-bold">
                Tên phụ huynh <span className="required">*</span>
              </label>
              <Input
                value="324324234"
                placeholder="Tên phụ huynh"
                id="parent_name"
                name="parent_name"
                className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
              />
            </div>

            <div className="w-[25%] px-[8px]">
              <label htmlFor="parent_date_of_birth" className="font-bold">
                Ngày sinh <span className="required">*</span>
              </label>
              <Input
                placeholder="Ngày sinh"
                type="date"
                id="parent_date_of_birth"
                name="parent_date_of_birth"
                max="2024-05-03"
                className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
              />
            </div>
            <div className="w-[25%] px-[8px]">
              <label htmlFor="parent_gender" className="font-bold">
                Giới tính <span className="required">*</span>
              </label>
              <Select
                name="parent_gender"
                id="parent_gender"
                classSelect="w-[100%] mt-[8px] h-[40px]"
                datas={[
                  { key: "0", value: "Nam" },
                  { key: "1", value: "Nữ" },
                ]}
              />
            </div>
          </div>
          <div className="mb-[20px] px-[8px] w-[100%] flex">
            <div className="w-[50%] px-[8px]">
              <label htmlFor="username" className="font-bold">
                Tên đăng nhập <span className="required">*</span>
              </label>
              <Input
                placeholder="Tên đăng nhập"
                id="username"
                name="username"
                // value={student.name}
                onChange={handleChange}
                className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
              />
            </div>
            <div className="w-[50%] px-[8px]">
              <label htmlFor="password" className="font-bold">
                Mật khẩu <span className="required">*</span>
              </label>
              <Input
                value="324324234"
                type={"password"}
                placeholder="password"
                name="password"
                id="password"
                className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
              />
            </div>
          </div>

          <div className="mb-[20px] px-[8px] w-[100%] flex">
            <div className="w-[50%] px-[8px]">
              <label htmlFor="join_date" className="font-bold">
                Số điện thoại <span className="required">*</span>
              </label>
              <Input
                value="324324234"
                placeholder="Số điện thoại"
                name="phone_number"
                type="text"
                id="phone_number"
                className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
              />
            </div>
            <div className="w-[50%] px-[8px]">
              <label htmlFor="Email" className="font-bold">
                Email <span className="required">*</span>
              </label>
              <Input
                placeholder="Email"
                name="email"
                id="email"
                className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
              />
            </div>
          </div>
          <div className="mb-[20px] px-[8px] w-[100%] flex">
            <div className="w-[30%] px-[8px]">
              <label htmlFor="province_id" className="font-bold">
                Tỉnh/Thành phố <span className="required">*</span>
              </label>
              <Select
                name="province_id"
                id="province_id"
                classSelect="w-[100%] mt-[8px] h-[40px]"
                datas={provinces}
                onChange={handleChangeProvince}
              />
            </div>
            <div className="w-[35%] px-[8px]">
              <label htmlFor="district_id" className="font-bold">
                Quận/Huyện <span className="required">*</span>
              </label>
              <Select
                name="district_id"
                id="district_id"
                classSelect="w-[100%] mt-[8px] h-[40px]"
                datas={districts}
                onChange={handleChangeDistrict}
              />
            </div>
            <div className="w-[35%] px-[8px]">
              <label className="font-bold">
                Phường/Xã <span className="required">*</span>
              </label>
              <Select
                name="ward_id"
                id="ward_id"
                classSelect="w-[100%] mt-[8px] h-[40px]"
                datas={wards}
              />
            </div>
          </div>
          <div className="mb-[20px] px-[8px] w-[100%]">
            <label htmlFor="address" className="font-bold">
              Địa chỉ <span className="required">*</span>
            </label>
            <Input
              value="324324234"
              placeholder="Địa chỉ"
              type="text"
              id="address"
              name="address"
              className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Thêm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
