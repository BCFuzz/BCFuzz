class C1 extends Date {
}
const v2 = new C1();
const v3 = v2.toLocaleTimeString();
const v6 = new Uint8Array(1000);
try { v6.setFromBase64(v3); } catch (e) {}
gc();
