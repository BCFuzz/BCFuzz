function f0() {
    return f0;
}
const v2 = Symbol.toPrimitive;
function f3(a4, a5, a6, a7) {
    a4 + f0;
    return a5;
}
try { f3(v2); } catch (e) {}
for (let i12 = -3, i13 = 10; i12 < i13; i13--) {
}
gc();
