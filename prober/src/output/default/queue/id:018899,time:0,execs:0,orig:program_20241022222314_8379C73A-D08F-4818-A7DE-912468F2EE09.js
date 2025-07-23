const t0 = ("constructor").constructor;
const v2 = new t0();
function f3(a4, a5, a6, a7) {
    a5 + v2;
    return f3;
}
for (let v9 = 0; v9 < 5; v9++) {
    const t7 = f3();
    t7();
}
gc();
