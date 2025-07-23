for (let i2 = 0, i3 = 88957035; i3--, i2 < i3;) {
}
const v13 = new SharedArrayBuffer(56);
function f14(a15) {
    return Float32Array < a15;
}
v13.valueOf = f14;
const v18 = new BigInt64Array(v13);
for (let [i51, i52] = (() => {
        for (let i21 = -3, i22 = 10; i21 < i22; i22--) {
        }
        for (let i31 = 0, i32 = 10; i32--, i31 < i32;) {
            for (let i41 = 0, i42 = 10; i41 < i42; i42--) {
            }
        }
        return [0, 10];
    })();
    i52--, i51 < i52;
    ) {
    createGlobalObject().Atomics.wait(v18, v13, v13, i51);
}
gc();
