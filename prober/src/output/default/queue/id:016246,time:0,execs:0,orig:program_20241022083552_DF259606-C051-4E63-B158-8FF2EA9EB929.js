function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const o5 = {
    "maxByteLength": 2329388498,
};
const v7 = new ArrayBuffer(7, o5);
const v9 = new Float32Array(v7, v2, Float32Array);
delete v9[7];
gc();
