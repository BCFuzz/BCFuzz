const o2 = {
    "maxByteLength": 3614,
};
const v4 = new SharedArrayBuffer(3614, o2);
const v6 = new BigUint64Array(v4);
function f7() {
    createGlobalObject().Atomics.compareExchange(v6);
    return v4;
}
try { f7(); } catch (e) {}
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
}
gc();
