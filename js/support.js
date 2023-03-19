const container = document.getElementById("container");

Array.from(document.getElementsByClassName("menu-item")).forEach(
  (item, index) => {
    item.onmouseover = () => {
      container.dataset.activeIndex = index;
    };
  }
);
