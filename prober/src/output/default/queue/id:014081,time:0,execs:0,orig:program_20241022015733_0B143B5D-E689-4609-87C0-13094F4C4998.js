class C0 {
}
const v1 = new C0();
const v4 = new ArrayBuffer();
const v6 = new DataView(v4);
try { v6.setInt32(undefined, v6, v1); } catch (e) {}
gc();
