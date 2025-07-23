class C0 {
}
const v1 = C0.d;
let v2;
try { v2 = v1.m(C0, C0, v1, v1); } catch (e) {}
const o5 = {
    "maxByteLength": 5,
};
const v7 = new ArrayBuffer(5, o5);
const v9 = new Int32Array(v7);
v9.constructor = v2;
v9.subarray(v2, 5);
gc();
