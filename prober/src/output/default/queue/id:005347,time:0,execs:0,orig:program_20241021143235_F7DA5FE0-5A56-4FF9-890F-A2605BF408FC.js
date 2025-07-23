class C2 extends Date {
}
const v3 = new C2();
try { v3.setUTCMinutes(9007199254740990n); } catch (e) {}
gc();
