function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const o6 = {
    "maxByteLength": 11,
};
const v8 = new ArrayBuffer(5, o6);
const v10 = new Float64Array(v8, F0, o6);
v10[749075507];
gc();
