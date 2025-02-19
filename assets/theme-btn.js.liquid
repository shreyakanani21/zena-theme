const themeBtnParent = document.querySelector(".theme-btns");
const rtlBtn = document.querySelector("#rtl-btn");
const darkBtn = document.querySelector("#dark-btn");
const html = document.querySelector("html");
const body = document.querySelector("body");
const rtlLink = document.querySelector("#rtl-link");

const swiperElements = document.querySelectorAll(".swiper");
const swiperSlides = document.querySelectorAll(".swiper-slide");

// Set all `.swiper` elements to LTR
swiperElements.forEach(el => el.setAttribute("dir", "ltr"));
swiperSlides.forEach(slide => slide.setAttribute("dir", "ltr"));

// Function to toggle `.offcanvas` elements based on direction
function adjustOffcanvasForRTL() {
    const direction = localStorage.getItem("dir") || "";
    document.documentElement.setAttribute("dir", direction);

    const isRTL = direction === "rtl";
    if (isRTL) {
        const offcanvasElements = document.querySelectorAll(".offcanvas");
        offcanvasElements.forEach((element) => {
            if (element.classList.contains("offcanvas-start")) {
                element.classList.replace("offcanvas-start", "offcanvas-end");
            } else if (element.classList.contains("offcanvas-end")) {
                element.classList.replace("offcanvas-end", "offcanvas-start");
            }
        });
    }
}

// Event listener for theme button clicks
themeBtnParent?.addEventListener("click", function (e) {
    e.preventDefault();
    const clicked = e.target.closest(".btntheme")?.id;
    if (!clicked) return;

    if (clicked === "rtl-btn") {
        rtlBtn.id = "ltr-btn";
        rtlBtn.querySelector(".rtl").textContent = "Ltr";
        html.setAttribute("dir", "rtl");
        body.setAttribute("dir", "rtl");

        rtlBtn.classList.add("rtlBtnEl");
        localStorage.setItem("rtlcss", "../assets/css/vendors/bootstrap.rtl.css");
        localStorage.setItem("dir", "rtl");
        localStorage.setItem("bodyDir", "rtl");
        localStorage.setItem("rtlBtnId", "ltr-btn");
        localStorage.setItem("textContentRtl", "Ltr");

        swiperSlides.forEach(slide => slide.setAttribute("dir", "rtl")); 

        // Adjust .offcanvas elements for RTL
        adjustOffcanvasForRTL();
    }

    if (clicked === "ltr-btn") {
        rtlBtn.id = "rtl-btn";
        rtlBtn.querySelector(".rtl").textContent = "Rtl";
        html.setAttribute("dir", "");
        body.setAttribute("dir", "");

        localStorage.setItem("rtlcss", "../assets/css/vendors/bootstrap.css");
        localStorage.setItem("dir", "");
        localStorage.setItem("bodyDir", "ltr");
        localStorage.setItem("rtlBtnId", "rtl-btn");
        localStorage.setItem("textContentRtl", "Rtl");

        swiperSlides.forEach(slide => slide.setAttribute("dir", "ltr"));
    }

    if (clicked === "dark-btn") {
        darkBtn.id = "light-btn";
        darkBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg><div class="dark">Light</div>`;
        body.classList.add("dark");
        localStorage.setItem("body", "dark");
        localStorage.setItem("darkId", "light-btn");
        localStorage.setItem("textContentDark", `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg><div class="dark">Light</div>`);
    }

    if (clicked === "light-btn") {
        darkBtn.id = "dark-btn";
        darkBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg><div class="dark">Dark</div>`;
        body.classList.remove("dark");
        localStorage.setItem("body", "");
        localStorage.setItem("darkId", "dark-btn");
        localStorage.setItem("textContentDark", `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg><div class="dark">Dark</div>`);
    }
});

// Initial setup based on localStorage
rtlBtn.id = localStorage.getItem("rtlBtnId") || "rtl-btn";
rtlBtn.querySelector(".rtl").textContent = localStorage.getItem("textContentRtl") || "Rtl";
html.setAttribute("dir", localStorage.getItem("dir") || "");
swiperSlides.forEach(slide => slide.setAttribute("dir", localStorage.getItem("dir") || ""));

if (localStorage.getItem("dir") === "rtl") {
    body.setAttribute("dir", "rtl");
    adjustOffcanvasForRTL();
} else {
    body.setAttribute("dir", ""); 
}

// Dark theme setup
darkBtn.id = localStorage.getItem("darkId") || "dark-btn";
darkBtn.innerHTML = localStorage.getItem("textContentDark") || `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg><div class="dark">Dark</div>`;
if (localStorage.getItem("body") === "dark") {
    body.classList.add("dark");
}
