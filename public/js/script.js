var data = [];

dailyData = () => {

    var Dailyinside = {
        Dailyinside: document.querySelector("#inputdaily").value,
    };

    if (Dailyinside.inputdaily !== "") {
        data = JSON.parse(localStorage.getItem("dailydata")) || [];
        data.push(Dailyinside);

        localStorage.setItem("dailydata", JSON.stringify(data));
        // data = JSON.parse(data);
    }
    //inputtan aldığı veriyi card içine bastım
    inputdata = document.getElementById("inputdaily").value;
    document.querySelector(".dailycontent").innerHTML += '<br>' + `<span class="deletedata">` + inputdata;
    document.getElementById('inputdaily').value = "";

}
weeklyData = () => {
    var Weeklyinside = {
        Weeklyinside: document.querySelector("#inputweekly").value,
    };

    if (Weeklyinside.inputweekly !== "") {
        data = JSON.parse(localStorage.getItem("weeklydata")) || [];
        data.push(Weeklyinside);

        localStorage.setItem("weeklydata", JSON.stringify(data));
        // data = JSON.parse(data);
    }
    //inputtan aldığı veriyi card içine bastım
    inputdata = document.getElementById("inputweekly").value;
    document.querySelector(".weeklycontent").innerHTML += '<br>' + `<span class="deletedata">` + inputdata;
    document.getElementById('inputweekly').value = "";
}
monthlyData = () => {
    var monthlyinside = {
        monthlyinside: document.querySelector("#inputmonthly").value,
    };
    if (monthlyinside.inputmonthly !== "") {
        data = JSON.parse(localStorage.getItem("monthlydata")) || [];
        data.push(monthlyinside);

        localStorage.setItem("monthlydata", JSON.stringify(data));
        // data = JSON.parse(data);
    }
    //inputtan aldığı veriyi card içine bastım
    inputdata = document.getElementById("inputmonthly").value;
    document.querySelector(".monthlycontent").innerHTML += '<br>' + `<span class="deletedata">` + inputdata;
    document.getElementById('inputmonthly').value = "";
}

// eğer localde bir data varsa yüklemeye başla
if (localStorage.getItem('dailydata') != null) {
    // sayfa açılınca yüklenme metodu
    var dailytemp = JSON.parse(localStorage.getItem('dailydata'));
    dailytemp.map((item, index) => {
        document.querySelector(".dailycontent").innerHTML += '<br>' + `<span class="deletedata" id=${index} onclick=deleteplan(id)>` + item.Dailyinside;

    })
}

if (localStorage.getItem('weeklydata') != null) {
    // sayfa açılınca yüklenme metodu
    var weeklytemp = JSON.parse(localStorage.getItem('weeklydata'));
    weeklytemp.map((item, index) => {
        document.querySelector(".weeklycontent").innerHTML += '<br>' + `<span class="deletedata" id=${index} onclick=deleteWeeklyPlan(id)>` + item.Weeklyinside;
    })
}
if (localStorage.getItem('monthlydata') != null) {
    // sayfa açılınca yüklenme metodu
    var monthlytemp = JSON.parse(localStorage.getItem('monthlydata'));
    monthlytemp.map((item, index) => {
        document.querySelector(".monthlycontent").innerHTML += '<br>' + `<span class="deletedata" id=${index} onclick=deleteMonthlyPlan(id)>` + item.monthlyinside;

    })
}
deleteplan = (data) => {

    dailytemp.map((item, index) => {
        if (index == data)
            dailytemp.splice(index, 1);

    })
    localStorage.setItem("dailydata", JSON.stringify(dailytemp))

    location.reload();
}
deleteWeeklyPlan = (data) => {

    weeklytemp.map((item, index) => {
        if (index == data)
            weeklytemp.splice(index, 1);

    })
    localStorage.setItem("weeklydata", JSON.stringify(weeklytemp))

    location.reload();
}

deleteMonthlyPlan = (data) => {
    monthlytemp.map((item, index) => {
        if (index == data)
            monthlytemp.splice(index, 1);

    })
    localStorage.setItem("monthlydata", JSON.stringify(monthlytemp))

    location.reload();
}
document.querySelector("#inputdaily").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {

        dailyData();
        location.reload();
    }
});
document.querySelector("#inputweekly").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weeklyData();
        location.reload();
    }
});
document.querySelector("#inputmonthly").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        monthlyData();
        location.reload();
    }
});

