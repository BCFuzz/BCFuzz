class C0 {
}
const v1 = new C0();
const v4 = new SharedArrayBuffer();
const v6 = new DataView(v4);
try { v6.getFloat16(1, v1); } catch (e) {}
gc();
