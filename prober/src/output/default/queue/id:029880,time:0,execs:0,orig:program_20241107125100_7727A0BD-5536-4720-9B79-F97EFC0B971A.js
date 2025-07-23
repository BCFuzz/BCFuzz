const v1 = [247044494];
function f4(a5, a6) {
    return 1000000.0;
}
const o10 = {
    "maxByteLength": 2147483647,
};
function f11(a12) {
    return 536870912;
}
o10.valueOf = f11;
const v13 = new ArrayBuffer(o10, o10);
v13[Symbol.toPrimitive] = f4;
const v16 = new Uint8Array(v13, Uint32Array, v13);
function f17(a18) {
    Object.defineProperty(v16, 0, { writable: true, enumerable: true, value: v1 });
    return v16;
}
f17.call(f11, 2147483647, o10);
gc();
