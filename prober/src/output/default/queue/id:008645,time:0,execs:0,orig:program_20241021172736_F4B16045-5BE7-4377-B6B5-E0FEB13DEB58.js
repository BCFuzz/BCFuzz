const v1 = new BigUint64Array();
class C4 extends Date {
}
const v5 = new C4();
v5.setHours(v1);
try { v5.setDate(-1024n); } catch (e) {}
gc();
