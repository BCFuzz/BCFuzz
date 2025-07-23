function f2() {
    return 1495;
}
BigInt64Array.toString = f2;
const o5 = {
    "maxByteLength": 256,
};
const v7 = new ArrayBuffer(5, o5);
try { v7.resize(BigInt64Array); } catch (e) {}
gc();
