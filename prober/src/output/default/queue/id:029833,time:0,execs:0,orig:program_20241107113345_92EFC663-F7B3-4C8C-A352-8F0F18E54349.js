const v2 = new SharedArrayBuffer(200);
function f3() {
    return 200;
}
v2.valueOf = f3;
function f4(a5) {
    return v2 >>> a5;
}
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
const o18 = {
    "maxByteLength": 3614,
};
const v20 = new SharedArrayBuffer(3614, o18);
const v22 = new Int32Array(v20);
Object.defineProperty(v22, Symbol.toPrimitive, { value: f4 });
createGlobalObject().Atomics.waitAsync(v22, 200, v22);
for (let i31 = 0, i32 = 10; i31 < i32; i32--) {
}
for (let i41 = 0, i42 = 10; i41 < i42; i42--) {
}
for (let i51 = 0, i52 = 10;
    i51 < i52;
    (() => {
        --i52;
        for (let i58 = i52, i59 = 10; i58 < i59; i59--) {
        }
    })()) {
}
gc();
