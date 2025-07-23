const v1 = Date();
function f2(a3) {
    const o7 = {
        [v1](a5, a6) {
        },
    };
    return o7;
}
const v8 = f2();
function f9() {
    return Date;
}
v8.valueOf = f9;
for (let v10 = 0; v10 < 5; v10++) {
    f2().constructor.entries(v8);
}
gc();
