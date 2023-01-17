const menu = document.querySelector("#bar");
const item = document.querySelector("#item");

item.style.right = "-300px";

menu.addEventListener("click", () => {
  if (item.style.right == "-300px") item.style.right = "0";
  else item.style.right = "-300px";
});
