function f0(a1, a2, a3) {
    const o4 = {
    };
    return o4;
}
BigInt64Array[Symbol.toPrimitive] = f0;
const v8 = new BigInt64Array();
const v10 = new Int32Array();
try { v10.set(v8, BigInt64Array); } catch (e) {}
gc();
