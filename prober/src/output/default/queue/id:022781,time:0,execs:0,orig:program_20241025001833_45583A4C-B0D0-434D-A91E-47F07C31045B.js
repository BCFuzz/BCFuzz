function f0() {
    return f0;
}
const v2 = new BigInt64Array();
v2[Symbol.toPrimitive] = f0;
const o5 = {
};
const v7 = new Int8Array();
try { v7.set(o5, v2); } catch (e) {}
gc();
