class C1 {
}
const v2 = new C1();
const o6 = {
    "maxByteLength": 3071283242,
};
const v8 = new SharedArrayBuffer(1024, o6);
new Uint8Array(v8, 6, v2);
gc();
