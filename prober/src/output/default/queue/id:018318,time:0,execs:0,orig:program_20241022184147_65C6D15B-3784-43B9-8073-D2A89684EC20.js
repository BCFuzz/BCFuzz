function f1() {
    const v2 = new Date(f1);
    const t2 = v2.toLocaleDateString;
    t2();
    return v2;
}
class C5 extends f1 {
}
try { new C5(); } catch (e) {}
gc();
