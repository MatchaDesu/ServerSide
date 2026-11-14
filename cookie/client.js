const loginAsStudentBtn = document.getElementById("login-student");
const loginAsLecturerBtn = document.getElementById("login-lecturer");
const loginAsAdminBtn = document.getElementById("login-admin");
const adminBtn = document.getElementById("admin");
const responsesDiv = document.getElementById("responses");

loginAsStudentBtn.addEventListener("click", () => {
  login("Student");
});

loginAsLecturerBtn.addEventListener("click", () => {
  login("Lecturer");
});

loginAsAdminBtn.addEventListener("click", () => {
  login("Admin");
});

function login(username) {
  fetch("http://localhost:3000/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }), // Frontend ส่ง JSON
  })
    .then((res) => res.text()) // แปลง Response Body ให้เป็น String ที่ใช้งานได้ res.send("Authed as Admin");
    .then((data) => (responsesDiv.textContent = data)); // data คือข้อความ String ที่ได้จากขั้นตอนแรก
}

adminBtn.addEventListener("click", () => {
  fetch("http://localhost:3000/adminData", {
    credentials: "include", // เมื่อ Browser ส่ง HTTP Request ไปยัง Server ให้แนบ Cookies ที่เกี่ยวข้องไปด้วย แม้ Request นั้นจะเป็น Cross-Origin ก็ตาม
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.text())
    .then((data) => (responsesDiv.textContent = data));
});
