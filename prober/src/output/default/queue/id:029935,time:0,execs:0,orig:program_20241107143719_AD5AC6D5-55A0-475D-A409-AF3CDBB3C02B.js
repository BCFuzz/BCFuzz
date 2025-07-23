const o3 = {
    "maxByteLength": 3614,
};
const v5 = new SharedArrayBuffer(3614, o3);
const v7 = new Int32Array(v5);
createGlobalObject().Atomics.wait(v7, v7, o3, "-9223372036854775807");
for (let i14 = 0, i15 = 10;
    (() => {
        for (let i18 = 0, i19 = 10; i18 !== i19; i19--) {
        }
        return i14 < i15;
    })();
    i15--) {
}
gc();
