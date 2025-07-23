function f0(a1, a2) {
    return f0;
}
const v4 = new SharedArrayBuffer(SharedArrayBuffer);
function f5(a6) {
    return a6;
}
f5[Symbol.species] = f0;
v4.constructor = f5;
try { v4.slice(); } catch (e) {}
gc();
