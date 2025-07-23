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
const v15 = new Uint8Array(v12, Uint32Array, v12);
createGlobalObject().Atomics.load(v15);
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
gc();
