const v2 = new Float64Array(65535);
function f3() {
    v2[1073741825];
    return 65535;
}
for (let v5 = 0; v5 < 10; v5++) {
    f3();
}
gc();
