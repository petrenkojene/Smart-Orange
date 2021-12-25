window.onload = function () {
  currentHeader(".project_menu_slider_img");
  currentHeader(".project_menu_description_item1");
  currentHeader(".project_menu_description_item2");
};

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  var windowCenter = window.innerHeight / 2 + window.scrollY;
  currentTop(".about_company_img1");
  currentTop(".about_company_img2");
  currentTop(".about_company_img3");
  currentTop(".heading");
  currentTop(".about_company_description_description");
  currentTop(".main_task_header");
  currentTop(".main_task_description1");
  currentTop(".main_task_description2");
  currentTop(".ourProjects_description_description");
  currentTop(".ourProjects_img_1");
  currentTop(".ourProjects_img_2");
  currentTop(".ourProjects_img_3");
  currentTop(".ourProjects_img_4");
  currentTop(".ourProjects_img_5");

  function currentTop(elem) {
    let scrollObj = document.querySelector(elem);
    windowCenter >= scrollObj.offsetTop
      ? scrollObj.classList.add("fixed")
      : scrollObj.classList.remove("fixed");
  }
});
function currentHeader(elem) {
  let scrollObj = document.querySelector(elem);
  scrollObj.classList.add("fixed");
}
