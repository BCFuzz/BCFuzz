function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v5 = v4.__defineGetter__;
let v6;
try { v6 = v5(v4, v5, F0, F0); } catch (e) {}
const o10 = {
    "maxByteLength": 12,
};
const v12 = new ArrayBuffer(5, o10);
const v13 = new Uint32Array(v12);
v13.constructor = v6;
v13.subarray();
gc();
