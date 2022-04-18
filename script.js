const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (e) => {
  let parent = btn.getBoundingClientRect(),
  relX = e.pageX - parent.left,
  relY = e.pageY - parent.top
  const fill = btn.querySelector("#fillspan");
  fill.style.top = relY + "px";
  fill.style.left = relX + "px";
});