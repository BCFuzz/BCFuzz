class C2 extends Date {
}
const v3 = new C2();
const v4 = v3.toLocaleTimeString(C2, v3, 1000.0, Date, C2);
try { v4.normalize(1000.0); } catch (e) {}
gc();
