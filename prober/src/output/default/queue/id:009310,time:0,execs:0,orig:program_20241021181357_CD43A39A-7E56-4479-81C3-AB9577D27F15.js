class C1 extends Date {
}
const v2 = C1.prototype;
try { v2.toLocaleTimeString(); } catch (e) {}
gc();
