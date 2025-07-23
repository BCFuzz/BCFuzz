const o3 = {
    "maxByteLength": 3614,
};
const v5 = new SharedArrayBuffer(3614, o3);
const v6 = new Int8Array(v5);
function f7() {
    return createGlobalObject().Atomics.exchange(v6);
}
f7.call(3614, 3614, o3, SharedArrayBuffer, f7);
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
}
gc();
