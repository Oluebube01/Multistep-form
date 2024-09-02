// getting all required elements
// getting circle elements
let firstCircle = document.querySelector(".first");
let secondCircle = document.querySelector(".second");
let thirdCircle = document.querySelector(".third");
let forthCircle = document.querySelector(".forth");
let firstCircleMobile = document.querySelector(".first-mobile");
let secondCircleMobile = document.querySelector(".second-mobile");
let thirdCircleMobile = document.querySelector(".third-mobile");
let forthCircleMobile = document.querySelector(".forth-mobile");

// getting details elements for different pages
let detailsInfo = document.querySelector(".info");
let detailsPlan = document.querySelector(".plan");
let detailsAddon = document.querySelector(".add-ons");
let detailsSummary = document.querySelector(".summary");

// btn elements
let backBtn = document.querySelector(".back-btn");
let nextBtn = document.querySelector(".details-btn");

// click function for first circle
firstCircle.onclick = () => {
    detailsSummary.style.display = "none";
    detailsPlan.style.display = "none";
    detailsAddon.style.display = "none";
    detailsInfo.style.display = "block";
    backBtn.style.display = "none";
}
firstCircleMobile.onclick = () => {
    detailsInfo.style.display = "block";
    detailsSummary.style.display = "none";
    detailsPlan.style.display = "none";
    detailsAddon.style.display = "none";
    backBtn.style.display = "none";
}
// click function for second circle
secondCircle.onclick = () =>{
    detailsInfo.style.display = "none";
    detailsSummary.style.display = "none";
    detailsAddon.style.display = "none";
    detailsPlan.style.display = "block";
    backBtn.style.display = "block";
}
secondCircleMobile.onclick = () =>{
    detailsInfo.style.display = "none";
    detailsSummary.style.display = "none";
    detailsAddon.style.display = "none";
    detailsPlan.style.display = "block";
    backBtn.style.display = "block";
}
// click function for third circle
thirdCircle.onclick = () =>{
    detailsInfo.style.display = "none";
    detailsSummary.style.display = "none";
    detailsPlan.style.display = "none";
    detailsAddon.style.display = "block";
    backBtn.style.display = "block";
}
thirdCircleMobile.onclick = () =>{
    detailsInfo.style.display = "none";
    detailsSummary.style.display = "none";
    detailsPlan.style.display = "none";
    detailsAddon.style.display = "block";
    backBtn.style.display = "block";
}
// click function for forth circle
forthCircle.onclick = () =>{
    detailsInfo.style.display = "none";
    detailsPlan.style.display = "none";
    detailsAddon.style.display = "none";
    detailsSummary.style.display = "block";
    backBtn.style.display = "block";
}
forthCircleMobile.onclick = () =>{
    detailsInfo.style.display = "none";
    detailsPlan.style.display = "none";
    detailsAddon.style.display = "none";
    detailsSummary.style.display = "block";
    backBtn.style.display = "block";
}