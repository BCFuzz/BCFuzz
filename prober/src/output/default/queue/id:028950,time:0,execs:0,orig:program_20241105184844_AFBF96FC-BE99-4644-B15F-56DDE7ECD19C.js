function f2(a3, a4) {
    return 1000000.0;
}
const o6 = {
};
const o9 = {
    "maxByteLength": 2147483647,
};
function f10(a11) {
    return 536870912;
}
o9.valueOf = f10;
const v12 = new ArrayBuffer(o9, o9);
v12[Symbol.toPrimitive] = f2;
const v15 = new BigInt64Array(v12, BigInt64Array, v12);
function f16(a17) {
    Object.defineProperty(v15, 0, { writable: true, enumerable: true, value: o6 });
    return a17;
}
try { f16.call(); } catch (e) {}
gc();
