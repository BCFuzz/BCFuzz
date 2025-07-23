class C0 {
}
const v1 = new C0();
const o4 = {
    "maxByteLength": 536870912,
};
const v6 = new SharedArrayBuffer(5, o4);
const v8 = new Uint8Array(v6);
delete v8[v1];
gc();
