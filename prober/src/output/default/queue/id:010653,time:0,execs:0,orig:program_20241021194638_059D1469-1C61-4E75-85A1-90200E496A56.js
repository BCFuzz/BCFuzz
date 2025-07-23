class C2 extends Date {
}
const v3 = new C2();
v3[5] = v3;
v3.length = 6;
try { v3.toLocaleTimeString(v3); } catch (e) {}
gc();
