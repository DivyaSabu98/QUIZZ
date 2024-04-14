let user_name = sessionStorage.getItem("name");
let user_age = sessionStorage.getItem("age");
let user_gender = sessionStorage.getItem("gender");
let user_points = sessionStorage.getItem("points");

document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.age").innerHTML = user_age;
document.querySelector("span.gender").innerHTML = user_gender;
document.querySelector("span.points").innerHTML = user_points;
