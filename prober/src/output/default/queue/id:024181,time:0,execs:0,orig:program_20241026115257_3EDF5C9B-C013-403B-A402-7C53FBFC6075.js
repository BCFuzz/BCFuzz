class C1 extends Float32Array {
}
const v2 = new C1();
const v5 = createGlobalObject().Float16Array;
const v6 = new v5(v5);
v6.subarray(v6, v5, v5, C1, v5).set(v2);
gc();
