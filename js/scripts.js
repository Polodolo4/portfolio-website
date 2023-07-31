/*TIMELINE FUNCTIONALITY*/

document.addEventListener("DOMContentLoaded", function () {
  const markers = document.querySelectorAll(".timeline-icon");
  const timelinePanels = document.querySelectorAll(".timeline-panel");

  // Hide all timeline panels except the first one
  for (let i = 1; i < timelinePanels.length; i++) {
    timelinePanels[i].style.display = "none";
  }

  markers.forEach((marker, index) => {
    marker.addEventListener("click", () => {
      // Get the panel text for the clicked marker
      const panelText =
        timelinePanels[index].querySelector(".panel-text").textContent;

      // Update the panel text for the clicked marker
      const panelTextElement =
        timelinePanels[index].querySelector(".panel-text");
      panelTextElement.textContent = panelText;

      // Toggle active-dot class for the clicked marker
      markers.forEach((otherMarker) => {
        if (otherMarker === marker) {
          marker.classList.add("active-dot");
        } else {
          otherMarker.classList.remove("active-dot");
        }
      });

      // Show the panel with the corresponding class based on the clicked marker's data-text value
      timelinePanels.forEach((panel, panelIndex) => {
        if (panelIndex === index) {
          panel.style.display = "block";
        } else {
          panel.style.display = "none";
        }
      });

      // Get the background color of the clicked marker
      const markerColor = window.getComputedStyle(marker).backgroundColor;

      // Set the background color of the corresponding panel
      timelinePanels[index].style.backgroundColor = markerColor;
    });
  });

  /*OVERLAY FUNCTIONALITY*/

  const myWorkItems = document.querySelectorAll(".my-work__item");
  const overlay = document.querySelector(".overlay");

  myWorkItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      myWorkItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.add("blurred");
        }
      });
      overlay.style.opacity = "1";
    });

    item.addEventListener("mouseout", () => {
      myWorkItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("blurred");
        }
      });
      overlay.style.opacity = "0";
    });
  });

  const firstDot = document.querySelector(".timeline-icon.one");
  const firstDotColor = window.getComputedStyle(firstDot).backgroundColor;
  const firstPanel = document.querySelector(".panel-first");
  firstPanel.style.backgroundColor = firstDotColor;
});
