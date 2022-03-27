var totaltax;
var incometx;
var scharge;
var hlth;

function incometax() {
    var i5 = document.getElementById("income").value;
    var out1 = document.getElementById("out1");
    if (parseInt(i5) <= 250000) {
        incometx = 0;
    } else if (parseInt(i5) > 250000 && parseInt(i5) <= 500000) {
        incometx = 0.05 * parseInt(i5);
    } else if (parseInt(i5) > 500000 && parseInt(i5) <= 1000000) {
        incometx = 0.2 * parseInt(i5);
    } else if (parseInt(i5) > 1000000) {
        incometx = 0.3 * parseInt(i5);
    }
    out1.value = incometx.toFixed(2);
    return false;
}

function surcharge() {
    var i5 = document.getElementById("income").value;
    var out2 = document.getElementById("out2");
    if (parseInt(i5) > 5000000 && parseInt(i5) <= 10000000) {
        scharge = 0.1 * parseInt(i5);
    } else if (parseInt(i5) > 10000000 && parseInt(i5) <= 20000000) {
        scharge = 0.15 * parseInt(i5);
    } else if (parseInt(i5) > 20000000 && parseInt(i5) <= 50000000) {
        scharge = 0.25 * parseInt(i5);
    } else if (parseInt(i5) > 50000000) {
        scharge = 0.37 * parseInt(i5);
    }
    out2.value = scharge.toFixed(2);
    return false;
}

function health() {
    var out3 = document.getElementById("out3");
    hlth = 0.4 * (incometx + scharge);
    out3.value = hlth.toFixed(2);
    return false;
}

function liability() {
    var out4 = document.getElementById("out4");
    totaltax = incometx + scharge + hlth;
    out4.value = totaltax.toFixed(2);
    return false;
}

function callall() {
    incometax();
    surcharge();
    health();
    liability();
    return false;
}