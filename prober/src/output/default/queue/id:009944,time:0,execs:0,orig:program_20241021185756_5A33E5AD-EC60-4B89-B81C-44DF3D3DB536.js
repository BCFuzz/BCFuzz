function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const o4 = {
    "maxByteLength": 268435441,
};
const v6 = new SharedArrayBuffer(56, o4);
const v8 = new Uint32Array(v6);
try { v8.sort(F0); } catch (e) {}
gc();
