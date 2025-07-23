const v2 = new Uint8ClampedArray();
function f3(a4) {
    return a4;
}
function f5() {
    return f5;
}
f3[Symbol.species] = f5;
v2.constructor = f3;
try { v2.slice(); } catch (e) {}
gc();
