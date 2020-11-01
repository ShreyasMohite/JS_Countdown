var mytime;

function get() {
    var num = parseInt(document.getElementById("seconds").value);
    mytime = setInterval(() => {
        document.getElementById("answer").innerHTML = num;
        num -= 1;
        if (num == -1) {
            clearInterval(mytime)

        }

    }, 1000);

}
stop = () => clearInterval(mytime);

function set() {
    for (var i = 1; i <= 600; i++) {
        var select = document.getElementById("seconds");
        var option = document.createElement("OPTION");
        select.options.add(option);
        option.text = i;
        option.value = i;

    }

}