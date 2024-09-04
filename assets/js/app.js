const toggleSidebar = [...document.querySelectorAll(".toggleSidebar")];
const sidebar = document.getElementById("sidebar");
const backDrop = document.getElementById("backDrop");

const navtoggle = () => {
  sidebar.classList.toggle("active");
  backDrop.classList.toggle("active");
};

toggleSidebar.forEach((ele) => {
  ele.addEventListener("click", navtoggle);
});
