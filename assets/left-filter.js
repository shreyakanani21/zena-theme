document.addEventListener("DOMContentLoaded", () => {
  const filterForm = document.querySelector("form");
  const sortBySelect = document.getElementById("sort-by");
  const productGridContainer = document.getElementById(
    "product-grid-container"
  );
  const collectionsFilterGrid = document.getElementById(
    "collections-filter-grid"
  );
  const collectionHandle = collectionsFilterGrid.getAttribute(
    "data-collection-handle"
  );
  const clearButton = document.getElementById("clearButton");
  const appliedFiltersDiv = document.querySelector(".applied-flters");

  const baseUrl = `/collections/${collectionHandle}`;

  const loadSvgIcon = (iconName, container) => {
    const TuT = iconName.toLowerCase().trim();
    const loadingIndicator = document.createElement("span");
    loadingIndicator.classList.add("loading-indicator"); // You can style this with CSS for the loading state
    container.appendChild(loadingIndicator);

    fetch(`//glenthemes.github.io/iconsax/icons/${TuT}.svg`)
      .then((response) => response.text())
      .then((svgContent) => {
        container.innerHTML = svgContent;
        loadingIndicator.remove(); // Remove loading indicator once the icon is loaded
      })
      .catch((error) => {
        console.error(`Error loading SVG: ${iconName}`, error);
        loadingIndicator.remove(); // Remove loading indicator even on error
      });
  };

  const fetchAndUpdateProducts = (queryString) => {
    const fetchUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;

    fetch(fetchUrl)
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");

        const updatedGrid = doc.getElementById("product-grid-container");
        if (updatedGrid) {
          productGridContainer.innerHTML = updatedGrid.innerHTML;
        }

        const newAppliedFilters = doc.querySelector(".applied-flters");
        if (newAppliedFilters) {
          appliedFiltersDiv.innerHTML = newAppliedFilters.innerHTML;
        } else {
          appliedFiltersDiv.innerHTML = "";
        }

        history.pushState(null, "", fetchUrl);

        // Re-trigger icon loading for any new .iconsax elements
        const icons = document.querySelectorAll(".iconsax");
        icons.forEach((icon) => {
          const iconName = icon.getAttribute("icon-name");
          if (iconName) {
            loadSvgIcon(iconName, icon);
          }
        });
        updateWishlistButtonState();
      })
      .catch((error) => {
        console.error("Error fetching the updated products:", error);
      });
  };

  const serializeForm = () => {
    const formData = new FormData(filterForm);
    return new URLSearchParams(formData).toString();
  };

  filterForm.addEventListener("change", () => {
    const queryString = serializeForm();
    fetchAndUpdateProducts(queryString);
  });

  sortBySelect.addEventListener("change", () => {
    const queryString = serializeForm() + `&sort_by=${sortBySelect.value}`;
    fetchAndUpdateProducts(queryString);
  });

  // appliedFiltersDiv.addEventListener("click", (e) => {
  //   if (e.target.tagName === "A") {
  //     e.preventDefault();

  //     const filterInputId = e.target.getAttribute("data-filter");
  //     const filterInput = document.getElementById(filterInputId);

  //     if (filterInput) {
  //       filterInput.checked = false;

  //       const queryString = serializeForm();
  //       fetchAndUpdateProducts(queryString);
  //     } else {
  //       const urlToRemove = e.target.getAttribute("href");
  //       const queryString = new URL(
  //         urlToRemove,
  //         window.location.origin
  //       ).searchParams.toString();
  //       fetchAndUpdateProducts(queryString);
  //     }
  //   }
  // });

  appliedFiltersDiv.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      console.log("click");

      const dataFilterPrice = e.target.getAttribute("data-filter-price");
      const filterInputId = e.target.getAttribute("data-filter");

      if (dataFilterPrice) {
        const priceRange = dataFilterPrice.split("?");
        const priceRangeMinInput = document.getElementById(priceRange[0]);
        const priceRangeMaxInput = document.getElementById(priceRange[1]);

        if (priceRangeMinInput) priceRangeMinInput.value = "";
        if (priceRangeMaxInput) priceRangeMaxInput.value = "";

        const queryString = serializeForm();
        fetchAndUpdateProducts(queryString);
      } else if (filterInputId) {
        const filterInput = document.getElementById(filterInputId);

        if (filterInput) {
          filterInput.checked = false;
        }
        const queryString = serializeForm();
        fetchAndUpdateProducts(queryString);
      } else {
        const urlToRemove = e.target.getAttribute("href");
        const queryString = new URL(
          urlToRemove,
          window.location.origin
        ).searchParams.toString();
        fetchAndUpdateProducts(queryString);
      }
    }
  });

  clearButton.addEventListener("click", (e) => {
    e.preventDefault();

    const inputs = filterForm.querySelectorAll(
      "input[type='checkbox'], input[type='radio'], input[type='number']"
    );
    inputs.forEach((input) => {
      if (input.type === "number") {
        input.value = "";
      } else {
        input.checked = false;
      }
    });

    fetch(baseUrl)
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");

        const updatedGrid = doc.getElementById("product-grid-container");
        if (updatedGrid) {
          productGridContainer.innerHTML = updatedGrid.innerHTML;
        }

        appliedFiltersDiv.innerHTML = "";
        history.pushState(null, "", baseUrl);

        // Re-trigger icon loading for any new .iconsax elements
        const icons = document.querySelectorAll(".iconsax");
        icons.forEach((icon) => {
          const iconName = icon.getAttribute("icon-name");
          if (iconName) {
            loadSvgIcon(iconName, icon);
          }
        });
        updateWishlistButtonState();
      })
      .catch((error) => {
        console.error("Error clearing the filters:", error);
      });
  });

  // Initial load of icons
  const icons = document.querySelectorAll(".iconsax");
  icons.forEach((icon) => {
    const iconName = icon.getAttribute("icon-name");
    if (iconName) {
      loadSvgIcon(iconName, icon);
    }
  });
});

// Grid
const gridStyleParent = document.querySelector(".filter-option-grid");
const visibleEl = document.getElementById("product-grid-container");

if (gridStyleParent) {
  if (window.innerWidth <= 991) {
    document.querySelector(`.nav-link[data-grid="3"]`).classList.add("active");
  }
  if (window.innerWidth <= 767) {
    document.querySelector(`.nav-link[data-grid="2"]`).classList.add("active");
    visibleEl.className = [`row-cols-2 row g-3 g-xl-4 product-list`];
  }

  gridStyleParent?.addEventListener("click", function (e) {
    e.preventDefault();
    const clicked = e.target.closest(".nav-link");
    if (!clicked) return;

    gridStyleParent
      .querySelectorAll(".nav-link")
      .forEach((el) => el.classList.remove("active"));
    clicked.classList.add("active");
    if (clicked.dataset.grid === "2") {
      visibleEl.className = [
        `row-cols-${clicked.dataset.grid} row g-3 g-xl-4 product-list`,
      ];
    } else if (clicked.dataset.grid === "3") {
      visibleEl.className = [
        `row-cols-2 row-cols-sm-${clicked.dataset.grid} row g-3 g-xl-4 product-list`,
      ];
    } else if (clicked.dataset.grid === "4") {
      visibleEl.className = [
        `row-cols-2 row-cols-sm-3 row-cols-xl-${clicked.dataset.grid} row g-3 g-xl-4 product-list`,
      ];
    } else if (clicked.dataset.grid === "list") {
      visibleEl.className = [`list-section row row-cols-1 g-3 g-xl-4 product-list`];
    }
  });
}
