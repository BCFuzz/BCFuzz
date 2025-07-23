class C0 {
}
const v1 = new C0();
const v3 = new WeakSet();
const o6 = {
    "maxByteLength": 65537,
};
const v8 = new ArrayBuffer(3349, o6);
const v10 = new DataView(v8, v1, v3);
v10.byteLength;
gc();
