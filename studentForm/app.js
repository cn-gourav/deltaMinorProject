const input = document.getElementById("name");
const studentrow = document.getElementById("student-row");
const students = [];

input.addEventListener("input", (event) => {
  // console.log(event);
  // console.log(event.target);
  // console.log(event.target.value);
  const value = event.target.value;
  console.log(input.value.trim());
});
