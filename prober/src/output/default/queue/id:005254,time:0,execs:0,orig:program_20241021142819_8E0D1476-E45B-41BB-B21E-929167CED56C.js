class C2 extends Date {
}
const v3 = new C2();
v3.getTimezoneOffset();
try { v3.setDate(-1024n); } catch (e) {}
gc();
