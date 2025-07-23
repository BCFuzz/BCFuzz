function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const o6 = {
    "maxByteLength": 65537,
};
const v8 = new ArrayBuffer(1175, o6);
const v10 = new BigInt64Array(v8, F0, 13);
const v13 = createGlobalObject().Atomics;
v13.exchange(v10, v13, -256n);
gc();
