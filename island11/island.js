const modelViewer = document.querySelector("#island");
const progress = modelViewer.querySelector(".model-update-bar");

// Progress bar
modelViewer.addEventListener("progress", (event) => {
  const value = event.detail.totalProgress;
  progress.style.width = `${value * 100}%`;
});

// Hotspots click → change camera orbit
document.querySelectorAll(".Hotspot").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.dataset.orbit) {
      modelViewer.cameraOrbit = btn.dataset.orbit;
    }
    if (btn.dataset.target) {
      modelViewer.cameraTarget = btn.dataset.target;
    }
    if (btn.dataset.fov) {
      modelViewer.fieldOfView = btn.dataset.fov;
    }
  });
});
