class C1 extends Float32Array {
}
const v2 = new C1();
const v3 = v2.subarray();
const v5 = createGlobalObject();
const v6 = v5.Float16Array;
const v7 = new v6(v6, C1, C1, v5, v3);
v7.subarray(v3, v6).set(v2);
gc();
