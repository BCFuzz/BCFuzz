function f0() {
    return f0;
}
function* f1(a2, a3, a4, a5) {
    return f0;
}
const v6 = f1(f0, f1, f1, f0);
try { v6.throw(f0); } catch (e) {}
gc();
