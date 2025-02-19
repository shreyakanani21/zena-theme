document.addEventListener("DOMContentLoaded", function () {
  let isLoading = false;

  function showNotification(message, type = "success") {
    // Create a container if it doesn't exist
    let notificationContainer = document.querySelector(
      ".notification-container"
    );
    if (!notificationContainer) {
      notificationContainer = document.createElement("div");
      notificationContainer.className = "notification-container";
      document.body.appendChild(notificationContainer);
    }

    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerText = message;

    // Append the notification to the container
    notificationContainer.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("show");
    }, 10);

    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        notificationContainer.removeChild(notification);
      }, 300);
    }, 3000);
  }

  function showLoadingSpinner() {
    const loadingSpinner = document.getElementById("loadingSpinner");
    if (loadingSpinner) {
      loadingSpinner.style.display = "flex";
    }
  }

  function hideLoadingSpinner() {
    const loadingSpinner = document.getElementById("loadingSpinner");
    if (loadingSpinner) {
      loadingSpinner.style.display = "none";
    }
  }

  function showEmptyWishlistMessage() {
    const emptyMessage = document.getElementById("emptyWishlistMessage");
    if (emptyMessage) {
      emptyMessage.style.display = "block";
    }
  }

  function hideEmptyWishlistMessage() {
    const emptyMessage = document.getElementById("emptyWishlistMessage");
    if (emptyMessage) {
      emptyMessage.style.display = "none";
    }
  }

  function showWishlistContainer() {
    const wishlistContainer = document.getElementById("wishlistContainer");
    if (wishlistContainer) {
      wishlistContainer.style.display = "flex";
    }
  }

  function updateWishlistButtonState() {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const buttons = document.querySelectorAll(".wishlist-btn");

    buttons.forEach((button) => {
      const buttonHandle = button.getAttribute("data-product-handle");
      if (wishlist.includes(buttonHandle)) {
        button.classList.add("filled");
      } else {
        button.classList.remove("filled");
      }
    });
  }

  function addToWishlist(productHandle) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!wishlist.includes(productHandle)) {
      wishlist.push(productHandle);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      showNotification("Product added to wishlist!", "success");
      console.log("Product added to wishlist:", productHandle);
    } else {
      showNotification("Product is already in your wishlist.", "warning");
      console.log("Product is already in your wishlist.");
      window.location.href = "https://zena-demo.myshopify.com/pages/wishlist";
    }

    updateWishlistButtonState();
  }

  function removeFromWishlist(productHandle) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist = wishlist.filter((handle) => handle !== productHandle);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    showNotification("Product removed from wishlist.", "error");
    console.log("Product removed from wishlist:", productHandle);
    location.reload();

    updateWishlistButtonState();
  }

  // Load the wishlist on page load
  function loadWishlist() {
    showLoadingSpinner();

    const wishlistContainer = document.getElementById("wishlistContainer");
    if (!wishlistContainer) {
      return;
    }

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlistContainer.innerHTML = "";
    hideEmptyWishlistMessage();

    if (wishlist.length === 0) {
      hideLoadingSpinner();
      showEmptyWishlistMessage();
      return;
    }

    // Fetch product
    const fetchPromises = wishlist.map((handle) =>
      fetch(`/products/${handle}.js`)
        .then((response) => response.json())
        .then((product) => {
          const productCol = document.createElement("div");
          productCol.className = "col product-col";

          const imageSrc =
            product.images && product.images[0]
              ? product.images[0]
              : "default-image.jpg";

          const productCard = `
            <div class="product-card product-card-2">
              <div class="img-wrapper">
                <a href="/products/${product.handle}">
                  <img alt="${product.title}" class="img-fluid" src="${imageSrc}"/>
                </a>
                <a class="icon wishlist wishlist-remove-btn" href="javascript:void(0);" data-product-handle="${product.handle}">
                  <i class="iconsax" icon-name="trash">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M10.33 16.5H13.66" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9.5 12.5H14.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </i>
                </a>
                <div class="button-div">
                  <button class="view-btn wishlist-btn" data-product-handle="${product.handle}">
                    <i class="iconsax" icon-name="eye">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </i> 
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          `;

          productCol.innerHTML = productCard;
          wishlistContainer.appendChild(productCol);
        })
        .catch((error) => {
          console.error(
            `Failed to load product data for handle: ${handle}`,
            error
          );
        })
    );

    Promise.all(fetchPromises).finally(() => {
      hideLoadingSpinner();
      showWishlistContainer();
      updateWishlistButtonState();

      wishlistContainer
        .querySelectorAll(".wishlist-remove-btn")
        .forEach((button) => {
          button.addEventListener("click", function (event) {
            const productHandle = button.getAttribute("data-product-handle");
            removeFromWishlist(productHandle);
          });
        });
    });
  }

  document.querySelectorAll(".wishlist-btn").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const productHandle = button.getAttribute("data-product-handle");
      addToWishlist(productHandle);
    });
  });

  loadWishlist();
  updateWishlistButtonState();
});
