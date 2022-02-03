function CalculateAge() {
    var today = new Date();
    var birth = new Date(1995,3,7);
    var age = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    $('#lucas-years-old').html(age);
}

function darkModeInit(){
    var darkSwitch = document.getElementById("darkSwitch");
    window.addEventListener("load", function () {
        if (darkSwitch) {
        initTheme();
        darkSwitch.addEventListener("change", function () {
            resetTheme();
        });
        }
    });
}

function initTheme() {
    var darkThemeSelected = localStorage.getItem("darkSwitch") !== null && localStorage.getItem("darkSwitch") === "dark";

    darkSwitch.checked = darkThemeSelected;
    
    darkThemeSelected ? document.body.setAttribute("data-theme", "dark"): document.body.removeAttribute("data-theme");
}

function resetTheme() {
    if (darkSwitch.checked) {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("darkSwitch", "dark");
    } else {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem("darkSwitch");
    }
}
