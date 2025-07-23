const v1 = new Map();
function f2() {
}
function f3() {
    const t4 = "replace";
    t4.__proto__ = v1;
    f2();
    const o8 = {
        get e() {
        },
        [0.0]: "replace",
    };
}
for (let v9 = 0; v9 < 10; v9++) {
    f3();
}
gc();
