const v0 = [];
function f1() {
    const o2 = {
        __proto__: v0,
    };
    o2.toString = f1;
    return o2;
}
const v3 = f1();
v3.length = v3;
try { v3.pop(v3, v0); } catch (e) {}
for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
}
gc();
