class C0 {
}
const v1 = C0.toString();
const v4 = new Uint8Array(7);
try { v4.setFromBase64(v1); } catch (e) {}
gc();
