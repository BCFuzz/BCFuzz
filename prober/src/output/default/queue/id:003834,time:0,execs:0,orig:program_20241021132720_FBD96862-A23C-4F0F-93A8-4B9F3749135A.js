const v1 = new Int32Array(Int32Array, Int32Array, Int32Array);
function f2() {
    return Int32Array;
}
v1[Symbol.toPrimitive] = f2;
const v6 = new Int8Array(Symbol, Int8Array);
try { v6.subarray(v1); } catch (e) {}
gc();
