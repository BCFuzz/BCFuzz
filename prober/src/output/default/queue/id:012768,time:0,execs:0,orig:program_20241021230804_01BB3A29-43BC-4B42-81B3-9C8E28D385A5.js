const v2 = new SharedArrayBuffer();
function f3(a4) {
    return 3.2044927011322315;
}
f3[Symbol.species] = 3.2044927011322315;
v2.constructor = f3;
try { v2.slice(); } catch (e) {}
gc();
