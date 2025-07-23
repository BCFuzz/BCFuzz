function f1() {
    f1 >>>= f1;
    return Uint8ClampedArray;
}
const v2 = f1(Uint8ClampedArray, f1);
function f3(a4, a5) {
    return a5;
}
f3[Symbol.species] = f1;
const v8 = new v2();
v8.constructor = f3;
try { v8.subarray(); } catch (e) {}
gc();
