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
const v15 = new Uint16Array(v12, Uint16Array, v12);
function f16(a17) {
    Object.defineProperty(v15, 0, { writable: true, configurable: true, value: o6 });
    return Uint16Array;
}
f16.call();
gc();
