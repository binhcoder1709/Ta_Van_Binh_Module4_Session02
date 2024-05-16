"use strict";
function ChooseNational(national) {
    switch (national) {
        case "VN":
            return 10000;
        case "US":
            return 20000;
        case "UK":
            return 30000;
        default:
            return 0;
    }
}
ChooseNational("VN");
// bài 2
// Khởi tạo một biến kiểu Tuple chứa 3 giá trị kiểu number, string và bolean và gán giá
// trị cho biến đó. Sử dụng toán tử spread để lấy 3 giá trị trong đó ra và gán chúng cho
// 3 biến phân biệt.
const tuples = [1, "2", true];
const [var1, var2, var3] = tuples;
const Obj = {
    userName: "Bình",
    age: 20,
};
function StringTest(string) {
    if (string === "success") {
        return true;
    }
    return false;
}
// bài 5
// Khai báo một biến person kiểu Tuple, chứa thông tin về tên và tuổi của một người
const persons = ["Bình", 20];
// bài 6
// Định nghĩa một Type Alias cho kiểu dữ liệu Coordinates là một Tuple chứa hai số thực,
// tương ứng với vị trí (latitude, longitude).
