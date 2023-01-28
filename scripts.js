const holidays = {
    1: {
        'lunar': {
            1: 'Tết Nguyên Đán',
            15: 'Tết Nguyên Tiêu',
        },
        'solar': {
            6: 'Tổng tuyển cử bầu Quốc hội đầu tiên của nước Việt Nam dân chủ cộng hòa',
            7: 'Chiến thắng biên giới Tây Nam chống quân xâm lược',
            9: 'Ngày truyền thống học sinh, sinh viên Việt nam',
            13: 'Khởi nghĩa Đô Lương',
            11: 'Việt Nam gia nhập WTO',
            27: 'Ký hiệp định Paris',
            31: 'Ngày vía thần tài'
        },
    },
    2: {
        'lunar': {},
        'solar': {
            3: 'Thành lập Đảng cộng sản Việt Nam',
            8: 'Lãnh tụ Hồ Chí Minh trở về nước trực tiếp lãnh đạo cách mạng Việt Nam',
            27: 'Ngày thầy thuốc Việt Nam',
            14: 'Ngày lễ tình yêu',
        },
    },
    3: {
        'lunar': {
            3: 'Tết Hàn thực',
            10: 'Giỗ tổ Hùng Vương',
        },
        'solar': {
            8: 'Ngày Quốc tế Phụ nữ',
            11: 'Khởi nghĩa Ba Tơ',
            18: 'Chiến thắng quân Trung Quốc xâm lược trên biên giới phía Bắc',
            26: 'Ngày thành lập Đoàn TNCS Hồ Chí Minh',
        },
    },
    4: {
        'lunar': {
            14: 'Tết Dân tộc Khmer',
            15: 'Lễ Phật Đản',
        },
        'solar': {
            25: 'Ngày tổng tuyển cử bầu quốc hội chung của cả nước',
            30: 'Giải phóng Miền Nam, thống nhất tổ quốc',
        },
    },
    5: {
        'lunar': {
            5: 'Tết Đoan Ngọ',
        },
        'solar': {
            1: 'Ngày quốc tế lao động',
            7: 'Chiến thắng Điện Biên Phủ',
            9: 'Chiến thắng chủ nghĩa Phát xít',
            13: 'Ngày của Mẹ',
            15: 'Thành lập Đội TNTP Hồ Chí Minh',
            19: 'Ngày sinh Chủ tịch Hồ Chí Minh',
        },
    },
    6: {
        'lunar': {},
        'solar': {
            1: 'Quốc tế Thiếu nhi',
            5: 'Nguyễn Tất Thành rời cảng Nhà Rồng ra đi tìm đường cứu nước',
            17: 'Chiến thắng chủ nghĩa Phát xít',
            13: 'Ngày của Bố',
            21: 'Ngày báo chí cách mạng Việt Nam',
            28: 'Ngày gia đình Việt Nam',
        },
    },
    7: {
        'lunar': {
            15: 'Vu Lan',
        },
        'solar': {
            2: 'Nước ta đổi quốc hiệu từ Việt Nam dân chủ cộng hòa thành Cộng hòa XHCN Việt Nam',
            17: 'Hồ chủ tịch ra lời kêu gọi "Không có gì quý hơn độc lập, tự do"',
            27: 'Ngày thương binh, liệt sĩ',
            28: 'Thành lập công đoàn Việt Nam(1929)/Ngày Việt Nam gia nhập Asean(1995)',
        },
    },
    8: {
        'lunar': {
            1: 'Tết Katê',
            15: 'Tết Trung Thu',
        },
        'solar': {
            1: 'Ngày truyền thống công tác tư tưởng – văn hoá của Đảng',
            19: 'Cách mạng tháng 8 (Ngày Công an nhân dân)',
            20: 'Ngày sinh chủ tịch Tôn Đức Thắng',
        },
    },
    9: {
        'lunar': {
            9: 'Tết Trùng Cửu',
        },
        'solar': {
            2: 'Quốc khánh (1945)',
            10: 'Thành lập Mặt trận Tổ quốc Việt Nam',
            12: 'Xô Viết Nghệ Tĩnh',
            20: 'Việt Nam trở thành thành viên Liên hiệp quốc',
            23: 'Nam Bộ kháng chiến',
            27: 'Khởi nghĩa Bắc Sơn',
        },
    },
    10: {
        'lunar': {
            10: 'Tết Trùng Thập',
        },
        'solar': {
            1: 'Ngày quốc tế người cao tuổi',
            10: 'Giải phóng Thủ đô',
            14: 'Ngày hội Nông dân Việt Nam',
            15: 'Ngày truyền thống Hội thanh niên Việt Nam',
            20: 'Thành lập Hội liên hiệp phụ nữ Việt Nam',
        },
    },
    11: {
        'lunar': {},
        'solar': {
            20: 'Ngày nhà giáo Việt Nam',
            23: 'Khởi nghĩa Nam Kỳ - Thành lập Hội chữ thập đỏ Việt Nam',
        },
    },
    12: {
        'lunar': {
            23: 'Ông Táo chầu trời',
        },
        'solar': {
            1: 'Ngày thế giới phòng chống AIDS',
            19: 'Toàn quốc kháng chiến',
            22: 'Thành lập quân đội nhân dân Việt Nam',
        },
    },
}

function INT(d) {
    return Math.floor(d);
};


function getHoliday(date) {
    var arrar_date = date.split('/');
    var dd_solar = INT(arrar_date[0]);
    var mm_solar = INT(arrar_date[1]);
    if ((holidays[this.INT(mm_solar)]) && (holidays[INT(mm_solar)]['lunar'][INT(dd_solar)])) {
        return holidays[INT(mm_solar)]['lunar'][INT(dd_solar)];
    } else {
        if ((holidays[INT(mm_solar)]) && (holidays[INT(mm_solar)]['solar'][INT(dd_solar)])) {

            return holidays[INT(mm_solar)]['solar'][INT(dd_solar)];
        } else {
            return '';
        }
    }
}

function getDateStringConvert(date_holiday) {
    const currentTime = new Date();
    const array_date = date_holiday.split('/');
    const current_date = array_date[0];
    const current_month = array_date[1];
    const current_year = currentTime.getFullYear()
    const current_holiday = `${current_year}, ${current_month}, ${current_date}`
    const date = new Date(current_holiday);
    const options = {
        month: 'short'
    };
    const month = new Intl.DateTimeFormat('en-US', options).format(date);
    const year = date.getFullYear();
    return `${month} ${date.getDate()}, ${year}`;
}
// nhập ngày lễ vào
const date_holiday = "15/08";

const get_content_holiday = getHoliday(date_holiday);
document.getElementById("strong-upcoming").innerHTML = get_content_holiday;

const date_lunar = getDateStringConvert(date_holiday);

function showTime() {
    var today = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Ho_Chi_Minh"
    });
    today = new Date(today);
    var h = today.getHours(); // 0 - 23
    var m = today.getMinutes(); // 0 - 59
    var s = today.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = "<i class='myblue far fa-clock'></i><br>" + h + ":" + m + ":" + s + " " + session + "<br><span class='myblue'>(Việt Nam)</span>";
    document.getElementById("dongho").innerText = time;
    document.getElementById("dongho").innerHTML = time;

    setTimeout(showTime, 1000);

}
showTime();
document.getElementById('dh').innerHTML = "";

//

function getDateEventUpComing(date_lunar) {
    var today = new Date(date_lunar);
    var weekday = new Array(7);
    weekday[0] = "Chủ Nhật";
    weekday[1] = "Thứ Hai";
    weekday[2] = "Thứ Ba";
    weekday[3] = "Thứ Tư";
    weekday[4] = "Thứ Năm";
    weekday[5] = "Thứ Sáu";
    weekday[6] = "Thứ Bảy";
    var wd = weekday[today.getDay()];
    var dd = String(today.getDate()).padStart(1, '0');
    var mm = String(today.getMonth() + 1).padStart(1, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var html = "";
    html += "<strong>Ngày diễn ra</strong>: <strong class='color-yellow '>" + wd + ', ' + dd + '/' + mm + '/' + yyyy + "</strong> (Dương Lịch) <span style='font-size: 17px;'><strong><br>Múi giờ</strong>: Việt Nam/Hồ Chí Minh</span>";
    document.getElementById("date-event-upcoming").innerHTML = html
}

getDateEventUpComing(date_lunar);

// ========================== //
// Countdown JS
// ========================== //
// truyền tham số vào đây
const countdown = new Date(`${date_lunar} 00:00:00`);

function getRemainingTime(endtime) {
    const milliseconds = Date.parse(endtime) - Date.parse(new Date().toLocaleString("en-US", {
        timeZone: "Asia/Ho_Chi_Minh"
    }));
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    return {
        'total': milliseconds,
        'seconds': seconds,
        'minutes': minutes,
        'hours': hours,
        'days': days,
    };
}

function initClock(id, endtime) {
    const counter = document.getElementById(id);
    const daysItem = counter.querySelector('.js-countdown-days');
    const hoursItem = counter.querySelector('.js-countdown-hours');
    const minutesItem = counter.querySelector('.js-countdown-minutes');
    const secondsItem = counter.querySelector('.js-countdown-seconds');

    function updateClock() {
        const time = getRemainingTime(endtime);

        daysItem.innerHTML = time.days;
        hoursItem.innerHTML = ('0' + time.hours).slice(-2);
        minutesItem.innerHTML = ('0' + time.minutes).slice(-2);
        secondsItem.innerHTML = ('0' + time.seconds).slice(-2);

        if (time.total <= 0) {
            daysItem.innerHTML = '<div style="font-size:15px; color:#336699;">(SỰ KIỆN ĐANG DIỄN RA)</div> 0';
            hoursItem.innerHTML = '0';
            minutesItem.innerHTML = '0';
            secondsItem.innerHTML = '0';
            try {
                clearInterval(timeinterval);
            } catch (e) {
                console.log("Error");
            }

        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

initClock('js-countdown', countdown);