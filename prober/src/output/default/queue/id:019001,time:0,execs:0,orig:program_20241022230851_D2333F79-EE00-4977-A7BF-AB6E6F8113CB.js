const v1 = new Int32Array(Int32Array, Int32Array, Int32Array);
function f2() {
    return f2;
}
f2[Symbol.species] = f2;
v1.constructor = f2;
try { v1.slice(); } catch (e) {}
gc();
