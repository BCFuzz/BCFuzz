function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const o6 = {
    "maxByteLength": 65537,
};
const v8 = new ArrayBuffer(1175, o6);
const v10 = new Int32Array(v8, v2, 64);
createGlobalObject().Atomics.exchange(v10);
gc();
