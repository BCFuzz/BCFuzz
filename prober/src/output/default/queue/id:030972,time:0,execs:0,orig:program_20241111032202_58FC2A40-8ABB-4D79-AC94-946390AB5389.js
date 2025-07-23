const o2 = {
    "maxByteLength": 3614,
};
const v4 = new SharedArrayBuffer(3614, o2);
const v6 = new Int16Array(v4);
function f7() {
    const v9 = createGlobalObject();
    v9.Atomics.store(v6);
    return v9;
}
f7.call();
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
}
gc();
