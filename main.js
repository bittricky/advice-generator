(() => {
  document.addEventListener("htmx:afterRequest", function (evt) {
    const response = evt.detail.xhr.responseText;

    try {
      const data = JSON.parse(response);
      const adviceContent = document.getElementById("advice-content");
      const adviceNumber = document.getElementById("advice-number");

      adviceContent.innerHTML = `"${data.slip.advice}"`;
      adviceNumber.innerHTML = data.slip.id;
    } catch (error) {
      console.error("Failed to parse JSON response:", error);
    }
  });
})();
