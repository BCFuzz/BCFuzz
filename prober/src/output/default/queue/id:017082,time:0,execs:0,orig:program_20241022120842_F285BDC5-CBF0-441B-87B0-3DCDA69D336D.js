class C0 {
}
const v1 = new C0();
try { v1.setUint32(); } catch (e) {}
gc();
this.WebAssembly.RuntimeError;
gc();
