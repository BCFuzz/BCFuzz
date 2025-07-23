class C1 extends Int32Array {
}
const v2 = new C1();
for (let i = 0; i < 5; i++) {
    v2.subarray(v2);
}
gc();
