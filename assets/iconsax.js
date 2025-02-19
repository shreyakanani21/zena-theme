// not perfect, but it works
// for details please visit: https://glenthemes.github.io/iconsax
document.addEventListener("DOMContentLoaded", () => {
  init_iconsax();
});

function init_iconsax() {
  document.querySelectorAll(".iconsax").forEach((iconsax) => {
    const iconName = iconsax.getAttribute("icon-name");

    // Ensure icon-name exists and is not null
    if (iconName) {
      const TuT = iconName.toLowerCase().trim();

      fetch("//glenthemes.github.io/iconsax/icons/" + TuT + ".svg")
        .then((response) => {
          return response.text();
        })
        .then((svgContent) => {
          iconsax.innerHTML = svgContent;

          // Additional check for CSP-related issues
          if (
            iconsax.querySelectorAll("[http-equiv='Content-Security-Policy']")
              .length
          ) {
            iconsax.innerHTML = "";
          }
        });
    } else {
      console.warn(
        `Element with class "iconsax" is missing the "icon-name" attribute.`
      );
    }
  });
}
