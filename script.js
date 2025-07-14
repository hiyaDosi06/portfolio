function toggleForm() {
  const popup = document.getElementById("formPopup");
  popup.style.display = popup.style.display === "flex" ? "none" : "flex";
  if (popup.style.display === "flex") {
    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";
  }
}
