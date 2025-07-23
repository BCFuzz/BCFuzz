function f0() {
    const o2 = {
        get g() {
        },
    };
    return o2;
}
const v3 = f0();
const v4 = f0();
function f6(a7, a8, a9) {
    v3.g = a8;
}
f6();
f6();
const v13 = new Uint32Array();
v4[536870889] = f0;
v13.length >>= 6;
for (let i = 0; i < 250; i++) {
}
gc();
