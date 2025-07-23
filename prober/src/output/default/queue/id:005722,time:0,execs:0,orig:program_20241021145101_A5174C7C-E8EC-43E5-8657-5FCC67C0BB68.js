function f1() {
    return f1;
}
function f2(a3, a4) {
    a3.arguments;
    return f2;
}
const v6 = f2(f1);
try { v6(BigUint64Array); } catch (e) {}
gc();
