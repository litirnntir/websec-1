document.getElementById("calculate").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let prevResult = document.getElementById("current").querySelector("span").innerText;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Введите числа");
        return;
    }

    let result;
    switch (operator) {
        case "add":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "mul":
            result = num1 * num2;
            break;
        case "div":
            if (num2 === 0) {
                alert("Деление на ноль!");
                return;
            }
            result = num1 / num2;
            break;
    }

    document.getElementById("previous").querySelector("span").innerText = prevResult;
    document.getElementById("current").querySelector("span").innerText = result;
});