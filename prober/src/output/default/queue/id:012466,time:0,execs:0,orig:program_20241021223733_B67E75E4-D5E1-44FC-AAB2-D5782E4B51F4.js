function f0() {
    return f0;
}
function f1(a2, a3) {
    return a3;
}
f1[Symbol.species] = f0;
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
const v17 = new Uint32Array(Symbol, Symbol, Uint32Array);
v17.constructor = f1;
try { v17.subarray(); } catch (e) {}
gc();
