let danhsachphim = [
    ["tinhCam","https://motphimtv.info/xem-phim/cuoi-truoc-yeu-sau-tap-1-10517_124802.html",
        "https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimage.motphim.net%2Fposter%2Fcuoi-truoc-yeu-sau-10509.jpg%3F1661274878",
        "Full 24/24(VietSub)",
        "Cưới Trước Yêu Sau"],
    ["hanhDong","https://motphimtv.info/xem-phim/big-mouth-tap-1-10480_124572.html",
        "https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimage.motphim.net%2Fposter%2Fbig-mouth-10472.jpg%3F1661010549",
        "Tập 8(VietSub)",
        "Big Mouth"],
    ["tinhCam","https://motphimtv.info/xem-phim/la-em-tap-1-10458_124357.html",
        "https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimage.motphim.net%2Fposter%2Fla-em-10450.jpg%3F1661447871",
        "Tập 12(VietSub)",
        "Là Em 2022"],
    ["tinhCam","https://motphimtv.info/xem-phim/khong-khi-tinh-yeu-tap-1-10537_124972.html",
        "https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimage.motphim.net%2Fposter%2Fkhong-khi-tinh-yeu-10529.jpg%3F1661447827",
        "Tập 2(VietSub)",
        "Không Khí Tình yêu 2022"],
    ["hanhDong","https://motphimtv.info/xem-phim/lac-loi-duoi-long-con-luan-tap-1-10471_124483.html",
        "https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimage.motphim.net%2Fposter%2Flac-loi-duoi-long-con-luan-10463.jpg%3F1660997802",
        "Tập 36/36(VietSub)",
        "Lạc Lối Dưới Lòng Côn Luân"],
    ["hanhDong","https://motphimtv.info/xem-phim/tinh-han-xan-lan-tap-1-10306_123505.html",
        "https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimage.motphim.net%2Fposter%2Ftinh-han-xan-lan-10298.jpg%3F1660981253",
        "Tập 56/56(VietSub)",
        "Tinh Hán Xán Lạn"],
    ["tinhCam","https://motphimtv.info/xem-phim/hen-ho-chon-cong-so-tap-1-9937_120655.html",
        "https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimage.motphim.net%2Fposter%2Fhen-ho-chon-cong-so-9929.jpg%3F1649485677",
        "Full 12/12 VietSub",
        "Hẹn Hò Chốn Công Sở"],
    ["kinhDi","https://motphimtv.info/xem-phim/dia-nguc-doc-than-tap-1-9714_119058.html",
        "https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimage.motphim.net%2Fposter%2Fdia-nguc-doc-than-9706.jpg%3F",
        "Full 8/8 Vietsub",
        "ĐỊA NGỤC ĐỘC THÂN",],

    ["hoatHinh","https://motphimtv.info/xem-phim/thuong-lan-quyet-tap-1-vjh0-10507_124695.html",
    "        https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimage.motphim.net%2Fposter%2Fthuong-lan-quyet-10499.jpg%3F1661170727",
    "Tập 30(VietSub)",
    "Thương Lan Quyết"],
    ["tinhCam","https://motphimtv.info/xem-phim/hay-noi-cho-toi-dieu-uoc-cua-ban-tap-1-10516_124777.html",
        "https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimage.motphim.net%2Fposter%2Fhay-noi-cho-toi-dieu-uoc-cua-ban-10508.jpg%3F",
    "Tập 6 VietSub",
    "Cho Tôi Điều Ước Của Bạn"],
    ["hoatHinh" ,"https://motphimtv.info/xem-phim/running-man-tap-1-10_28.html",
        "https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimage.motphim.net%2Fposter%2Frunning-man-2.jpg%3F",
    "Tập 617 Vietsub",
    "RUNNING MAN"]
]


let str = ""

function hanhdong(theloai) {
    str=""
    for (let i = 0; i < danhsachphim.length; i++) {
        if(theloai === danhsachphim[i][0]){
            str += `
            <div class="img" style="float: left">
            <a target="_blank" href="${danhsachphim[i][1]}">
            <img src="${danhsachphim[i][2]}" width="270px" height="350px"></a>
            <div class="top-left">${danhsachphim[i][3]}</div>
            <div class="bottom-left" style="color: red">${danhsachphim[i][4]}</div>
            </div>`
        }

    }
    document.getElementById("show").innerHTML = str;
}
function hienThi() {
    str="";
    for (let i = 0; i < danhsachphim.length; i++) {
            str += `
            <div class="img" style="float: left">
            <a target="_blank" href="${danhsachphim[i][1]}">
            <img src="${danhsachphim[i][2]}" width="270px" height="350px"></a>
            <div class="top-left">${danhsachphim[i][3]}</div>
            <div class="bottom-left" style="color: red">${danhsachphim[i][4]}</div>
            </div>`
    }
    document.getElementById("show").innerHTML = str;
}

function demo   () {
    let searchText = document.getElementById("timKiem").value; // lấy giá trị từ id "timKiem"
    str=""
    for (let i = 0; i < danhsachphim.length; i++) { // lặp danh sách phim
        let filmName = danhsachphim[i][4] // khởi tạo biến tên phim
        if(filmName.match(searchText) != null){ //check xem giá trị tìm kiếm có nằm trong tên phim k?
                                                // nếu k trả ra null
            str += `
            <div class="img" style="float: left">
            <a target="_blank" href="${danhsachphim[i][1]}">
            <img src="${danhsachphim[i][2]}" width="270px" height="350px"></a>
            <div class="top-left">${danhsachphim[i][3]}</div>
            <div class="bottom-left" style="color: red">${danhsachphim[i][4]}</div>
            </div>`
        }
    }
    document.getElementById("show").innerHTML =str;
}

