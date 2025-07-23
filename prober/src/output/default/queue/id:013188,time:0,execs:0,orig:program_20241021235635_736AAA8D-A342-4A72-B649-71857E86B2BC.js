const v0 = [];
function f1(a2, a3) {
    return a3();
}
Object.defineProperty(v0, "toString", { configurable: true, value: f1 });
const v6 = new Int16Array();
try { v6.copyWithin(Int16Array, v0); } catch (e) {}
for (let i10 = 0, i11 = 10; i10 !== i11; i11--) {
}
gc();
