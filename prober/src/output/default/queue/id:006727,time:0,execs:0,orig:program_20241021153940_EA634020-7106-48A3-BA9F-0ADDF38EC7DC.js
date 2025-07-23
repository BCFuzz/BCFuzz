const v1 = ("caller").bold("caller", "caller", "caller", "caller");
class C4 extends Date {
}
const v5 = new C4(v1);
try { v5.setDate(-1024n); } catch (e) {}
gc();
