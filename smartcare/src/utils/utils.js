import moment from 'moment';

export const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};

export const formatDate = (date) => {
  const day = moment(date).date();
  const month = moment(date).month() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
  const year = moment(date).year();
  
    // Format thêm số 0 phía trước nếu cần thiết
    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;
  
    // Trả về chuỗi ngày tháng năm dưới dạng 'dd/mm/yyyy'
    return formattedDay + "/" + formattedMonth + "/" + year;
};

export const getFirstDayOfWeek = (date) => {
  const day = moment(date).day();
  const diff = moment(date).date() - day + (day === 0 ? -6 : 1); // Ngày đầu tiên của tuần
  return moment(date).date(diff);
};

// Hàm để lấy ngày cuối cùng của tuần
export const getLastDayOfWeek = (date) => {
  const day = moment(date).day();
  const diff = moment(date).date() - day + 5; // Ngày cuối cùng của tuần
  return moment(date).date(diff);
};

export const getWeekNumber = () => {
  const date = new Date();
  const onejan = new Date(date.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((date - onejan) / 86400000);
  const startOfWeek = onejan.getDay() <= 1 ? onejan : new Date(onejan.getFullYear(), 0, (8 - onejan.getDay()));
  // Tính số tuần
  const weekNum = Math.ceil((dayOfYear - (startOfWeek - onejan)) / 7) + 1;
  return weekNum;
};

export const parseDateFromString = (dateString) => {
  return moment(dateString, 'DD/MM/YYYY').toDate();
};

export const getSevenDaysAgo = (date) => {
  const getDate = parseDateFromString(date);
  const sevenDaysAgo = moment(getDate).subtract(7, 'days').toDate(); // 7 ngày trước
  return sevenDaysAgo;
};

export const getSevenDaysAhead = (date) => {
  const getDate = parseDateFromString(date);
  const sevenDaysAhead = moment(getDate).add(7, 'days').toDate(); // 7 ngày sau
  return sevenDaysAhead;
}

export const showToast=(message)=> {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'toast show';
  setTimeout(() => {
    toast.className = toast.className.replace('show', '');
  }, 3000);
}