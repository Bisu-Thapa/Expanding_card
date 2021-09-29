// lets select all five panels first
const panels = document.querySelectorAll(".panel");
// Now creating loop through each panel
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // Now when click, we want to add class of active
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
