import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Button, Input } from "../../components/atoms";
import Select from "../../components/atoms/select";
import withLayout from "../../components/layouts";
import {
  getDistricts,
  getProvinces,
  getWards,
} from "../../services/locationServices";
import {
  addAccount,
  getManager,
  updateManager,
} from "../../services/managerServices";
import { showToast } from "../../utils/utils";
import { useLocation } from "react-router-dom";

function CreateAccount() {
  const location = useLocation();
  const { id } = location.state || {};

  const ROLES = [
    { key: 1, value: "admin" },
    { key: 2, value: "teacher" },
    { key: 3, value: "coordinator" },
  ];
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [photoPreview, setPhotoPreview] = useState("");
  const [dataManager, setDataManager] = useState([]);
  const labelRef = useRef();

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

  useEffect(() => {
    const fields = Object.keys(dataManager);
    fields.forEach((field) => {
      const element = document.getElementById(field);
      if (element) {
        element.value = dataManager[field];
      }
    });
  }, [dataManager]);
  useLayoutEffect(() => {
    if (!id) return;
    (async () => {
      const res = await getManager(id);
      console.log(res);
      const dataManager = {
        ...res,
      };
      delete dataManager.profile_image;
      setDataManager(dataManager);

      const resDistricts = await getDistricts(dataManager.province_id);
      if (resDistricts && resDistricts.length > 0) {
        const districts = resDistricts.map((district) => ({
          key: district.id,
          value: district.name,
        }));
        setDistricts(districts);
        const resWards = await getWards(dataManager.district_id);
        if (resWards && resWards.length > 0) {
          const wards = resWards.map((ward) => ({
            key: ward.id,
            value: ward.name,
          }));
          setWards(wards);
        }
      }
      setPhotoPreview(res.profile_image);
    })();
  }, []);

  const validateForm = () => {
    let isValid = true;
    const requiredFields = [
      "name",
      "date_of_birth",
      "gender",
      "username",
      "password",
      "phone_number",
      "email",
      "province_id",
      "district_id",
      "ward_id",
      "address",
      "roles",
    ];
    requiredFields.forEach((field) => {
      console.log(field);
      if (id && (field == "password" || field == "roles")) {
      } else {
        const input = document.getElementById(field);
        if (!input.value) {
          isValid = false;
          input.classList.add("border-red-500");
        } else {
          input.classList.remove("border-red-500");
        }
      }
    });
    if (photoPreview == "") {
      isValid = false;
      labelRef.current.classList.add("required");
    } else {
      labelRef.current.classList.remove("required");
    }
    const phoneRegex = /^0[0-9]{9}$/;
    if (!phoneRegex.test(document.querySelector("#phone_number")?.value)) {
      isValid = false;
      document.querySelector("#phone_number").classList.add("border-red-500");
      showToast("Số điện thoại bắt đầu là 0 và có 10 số")
    } else {
      document.querySelector("#phone_number").classList.remove("border-red-500");
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      let formData = new FormData(e.target);
      const roles = [];
      formData.forEach((value, key) => {
        if (key == "roles") {
          roles.push(value);
        }
      });
      formData.delete("roles");

      // Thêm mảng roles vào formData dưới dạng array
      roles.forEach((role, index) => {
        formData.append(`roles[${index}]`, role);
      });
      if (id) {
        const res = await updateManager(formData, id);
        if (res.status == 422) {
          showToast(res.data?.message);
        } else {
          showToast("Cập nhật thành công");
        }
      } else {
        const res = await addAccount(formData);
        if (res.status == 422) {
          showToast(res.data?.message);
        } else {
          showToast("Tài khoản thêm thành công");
        }
      }
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

  const handlePhotoClick = () => {
    document.getElementById("profile_image").click();
  };

  const handlePhotoChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="shadow p-[12px] mt-[20px]">
      <form onSubmit={handleSubmit}>
        <div className="mb-[20px] px-[8px] w-[100%] flex">
          <div className="w-[50%] px-[8px]">
            <label htmlFor="name" className="font-bold">
              Họ và tên <span className="required">*</span>
            </label>
            <Input
              placeholder="Họ và tên"
              id="name"
              name="name"
              className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
            />
          </div>
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
        </div>
        <div className="mb-[20px] px-[8px] w-[100%] flex">
          {id ? (
            <div className="w-[34%] px-[8px]">
              <label htmlFor="username" className="font-bold">
                Tên đăng nhập <span className="required">*</span>
              </label>
              <Input
                placeholder="Tên đăng nhập"
                id="username"
                name="username"
                className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
              />
            </div>
          ) : (
            <div className="w-[34%] px-[8px]">
              <label className="font-bold">
                Vai trò <span className="required">*</span>
              </label>
              <Select
                name="roles"
                id="roles"
                classSelect="w-[100%] mt-[8px] h-[40px]"
                datas={ROLES}
              />
            </div>
          )}
          <div className="w-[34%] px-[8px]">
            <label htmlFor="join_date" className="font-bold">
              Số điện thoại <span className="required">*</span>
            </label>
            <Input
              placeholder="Số điện thoại"
              name="phone_number"
              type="text"
              id="phone_number"
              className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
            />
          </div>
          <div className="w-[34%] px-[8px]">
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
        {id ? (
          <></>
        ) : (
          <div className="mb-[20px] px-[8px] w-[100%] flex">
            <div className="w-[50%] px-[8px]">
              <label htmlFor="username" className="font-bold">
                Tên đăng nhập <span className="required">*</span>
              </label>
              <Input
                placeholder="Tên đăng nhập"
                id="username"
                name="username"
                className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
              />
            </div>
            <div className="w-[50%] px-[8px]">
              <label htmlFor="password" className="font-bold">
                Mật khẩu <span className="required">*</span>
              </label>
              <Input
                type={"password"}
                placeholder="password"
                name="password"
                id="password"
                className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
              />
            </div>
          </div>
        )}
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
            placeholder="Địa chỉ"
            type="text"
            id="address"
            name="address"
            className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded mt-[8px]"
          />
        </div>
        <div className="mb-[20px] px-[8px] w-[100%]">
          <label
            className="font-bold"
            onClick={handlePhotoClick}
            ref={labelRef}
          >
            Ảnh <span className="required">*</span>
          </label>
          <input
            type="file"
            id="profile_image"
            name="profile_image"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: "none" }}
          />
          {photoPreview && (
            <img
              src={photoPreview}
              alt="Ảnh học sinh"
              className="w-[100px] h-[100px] mt-[8px]"
            />
          )}
        </div>
        <div className="flex justify-center">
          <Button style={{ display: "block", margin: "auto" }}>
            {id ? "Cập nhật tài khoản" : "Tạo tài khoản"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default withLayout(CreateAccount, "Tạo Tài Khoản", 2, () => {});
