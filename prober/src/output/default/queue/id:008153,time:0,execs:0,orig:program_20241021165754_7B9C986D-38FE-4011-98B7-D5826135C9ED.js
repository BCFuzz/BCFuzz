function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F1();
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
}
new F7(F7, F1);
function f14() {
    return F7;
}
const v15 = Symbol.constructor;
function f16(a17, a18) {
    return v6;
}
Object.defineProperty(v15, 0, { enumerable: true, get: f14, set: f16 });
const v19 = [v6,v6,v6];
for (let i = 0; i < 250; i++) {
}
[v19];
gc();
