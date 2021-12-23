let plan = {
    dailyData: function () {
        var D = document.querySelector("#daily").value;
        localStorage.setItem('daily', D);
        // console.log(localStorage.getItem('daily'));
        document.querySelector(".dailycontent").innerText = localStorage.getItem('daily');
    },
    weeklyData: function () {
        var W = document.querySelector("#weekly").value;
        localStorage.setItem('weekly', W);
        document.querySelector(".weeklycontent").innerText = localStorage.getItem('weekly');
    },
    monthlyData: function () {
        var M = document.querySelector("#monthly").value;
        localStorage.setItem('monthly', M);
        document.querySelector(".monthlycontent").innerText = localStorage.getItem('monthly');
    }

}

document.querySelector("#daily").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        plan.dailyData();
    }
});
document.querySelector("#weekly").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        plan.weeklyData();
    }
});
document.querySelector("#monthly").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        plan.monthlyData();
    }
});





