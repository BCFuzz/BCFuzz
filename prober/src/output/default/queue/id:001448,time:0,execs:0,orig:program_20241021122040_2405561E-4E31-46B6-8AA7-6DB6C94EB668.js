function f1() {
    return false;
}
function f2(a3, a4) {
    a3 && a3;
    const o9 = {
        "g": f1,
        "b": a3,
        [false](a7, a8) {
        },
    };
    return o9;
}
f2(false);
const v12 = f2() || f2;
f1 = v12;
f2(v12, false);
const v15 = new Int16Array();
let v16;
try { v16 = v15.reduce(); } catch (e) {}
const o17 = {
};
Symbol(v16);
v16?.[v12];
for (let v21 = 0; v21 < 100; v21++) {
    f2();
}
const o23 = {
};
gc();
