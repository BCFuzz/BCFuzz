class C1 extends Int32Array {
}
const o4 = {
    "maxByteLength": 990,
};
const v6 = new SharedArrayBuffer(0, o4);
new C1(v6);
gc();
