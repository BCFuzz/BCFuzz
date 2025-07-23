class C0 {
}
let v1 = new C0();
let v2 = 32;
let v3 = Uint32Array;
const v5 = new Int8Array(v1, v2);
const v7 = new Float64Array(v2, v2, v2);
({"buffer":v1,"byteOffset":v2,"length":v3,} = v5);
v7.subarray(v3, v3).set(v5);
gc();
