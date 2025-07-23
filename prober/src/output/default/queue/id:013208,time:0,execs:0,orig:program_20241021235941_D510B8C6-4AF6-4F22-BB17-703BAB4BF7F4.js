function f0() {
    f0 >>>= f0;
    return f0;
}
f0();
function f2(a3, a4) {
    return a4;
}
f2[Symbol.species] = f0;
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
const v18 = new Uint32Array();
v18.constructor = f2;
try { v18.subarray(); } catch (e) {}
gc();
