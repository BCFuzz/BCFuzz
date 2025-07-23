function f2(a3, a4) {
    return 1000000.0;
}
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
const o18 = {
    "maxByteLength": 2147483647,
};
function f19(a20) {
    return 536870912;
}
o18.valueOf = f19;
const v21 = new ArrayBuffer(o18, o18);
v21[Symbol.toPrimitive] = f2;
const v24 = new Uint32Array(v21, Uint32Array, v21);
for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
}
createGlobalObject().Atomics.load(v24);
for (let i41 = 0, i42 = 10; i41 < i42; i42--) {
}
gc();
