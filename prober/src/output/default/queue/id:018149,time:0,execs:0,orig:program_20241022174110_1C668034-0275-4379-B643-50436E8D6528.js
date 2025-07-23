function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
let v5 = 7 % F0;
const v6 = v5--;
const v8 = new Float32Array(7);
function f10() {
    v8["lastIndexOf"](v6);
    return v8;
}
Array.valueOf = f10;
const v13 = Array();
function f14() {
    return Array;
}
Object.defineProperty(v13, 4, { configurable: true, get: f14 });
for (let i17 = 10, i18 = 10; -13369 < i18; i18--) {
}
v13.indexOf(v13, Array);
gc();
