const v2 = new Uint32Array(49);
const v4 = new BigInt64Array(49, 49, 49);
function f5() {
    return BigInt64Array;
}
v4[Symbol.toPrimitive] = f5;
try { v2.lastIndexOf(v4, v4); } catch (e) {}
gc();
