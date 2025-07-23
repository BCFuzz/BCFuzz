function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1();
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
}
const t7 = 1000000.0;
t7[8] = v5;
new F6(F1, 1000000.0, F6, F6);
function f13(a14, a15) {
    return arguments[1];
}
f13();
const v21 = new Uint32Array(1000);
for (const v22 in v21) {
}
gc();
