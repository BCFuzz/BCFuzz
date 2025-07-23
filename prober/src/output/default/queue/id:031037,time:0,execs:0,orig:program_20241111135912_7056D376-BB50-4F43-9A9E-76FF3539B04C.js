for (let i2 = 10, i3 = 10; -13369 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
}
const v22 = createGlobalObject().Atomics;
for (let i25 = 0, i26 = 1024;
    i25 < i26;
    (() => {
        i26--;
        const o33 = {
            "maxByteLength": 3614,
        };
        const v35 = new SharedArrayBuffer(3614, o33);
        const v37 = new Int32Array(v35);
        v22.waitAsync(v37);
    })()) {
}
gc();
