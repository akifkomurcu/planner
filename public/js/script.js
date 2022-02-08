var data = [];
let plan = {

    ekle: function () {


    },



    dailyData: function () {

        var Dailyinside = {
            Dailyinside: document.querySelector("#inputdaily").value,
        };
        if (Dailyinside.inputdaily !== "") {
            data = JSON.parse(localStorage.getItem("dailydata")) || [];
            data.push(Dailyinside);
            localStorage.setItem("dailydata", JSON.stringify(data));
            // data = JSON.parse(data);

            function getdata() {
                return JSON.parse(localStorage.getItem("dailydata"));
            }
            function init() {
                var uye = getdata();

                for (i = 0; i < data.length; i++) {
                    var daily = data[i];
                    createSchedule(daily);
                }
            }

        }

        document.querySelector(".dailycontent").innerHTML += '<br><a class="deletedata" href="">' + document.getElementById("inputdaily").value + '</a>';


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
//eğer localde bir data varsa yüklemeye başla
if (localStorage.getItem('dailydata') != null) {
    // sayfa açılınca yüklenme metodu
    var temp = JSON.parse(localStorage.getItem('dailydata'));
    temp.map((item) => {
        document.querySelector(".dailycontent").innerHTML += '<br>' + '<a class="deletedata" href="">' + item.Dailyinside + '</a>';

    })
}






document.querySelector("#inputdaily").addEventListener("keyup", function (event) {
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

