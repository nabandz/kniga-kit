function activateTabContent() {
  const tabs = document.querySelectorAll(".tabcontent__item"),
    tabsContent = document.querySelectorAll(".tabcontent__picture");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabcontent__item_active", "fade");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabcontent__item_active", "fade");
  }

  hideTabContent();
  showTabContent();

  tabs.forEach((element, i) => {
    element.addEventListener("click", function () {
      hideTabContent();
      showTabContent(i);
    });
  });
}

export default activateTabContent;
