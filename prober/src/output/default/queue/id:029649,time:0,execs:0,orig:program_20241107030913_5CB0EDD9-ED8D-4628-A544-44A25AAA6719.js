const v0 = [247044494];
function f3(a4, a5) {
    return 1000000.0;
}
const o9 = {
    "maxByteLength": 2147483647,
};
function f10(a11) {
    return 536870912;
}
o9.valueOf = f10;
const v12 = new ArrayBuffer(o9, o9);
v12[Symbol.toPrimitive] = f3;
const v15 = new Int32Array(v12, Int32Array, v12);
function f16(a17) {
    Object.defineProperty(v15, 0, { writable: true, enumerable: true, value: v0 });
    return 536870912;
}
f16.call();
gc();
