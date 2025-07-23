class C0 {
}
const v1 = new C0();
const o4 = {
    "maxByteLength": 2147483648,
};
const v6 = new ArrayBuffer(64, o4);
new Uint16Array(v6, o4, v1);
gc();
