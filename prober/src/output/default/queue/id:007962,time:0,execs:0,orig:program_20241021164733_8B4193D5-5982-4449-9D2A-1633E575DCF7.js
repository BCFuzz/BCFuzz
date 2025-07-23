function f1() {
    return BigUint64Array;
}
function f2(a3, a4) {
    a3.arguments;
    return f2;
}
try { f2(); } catch (e) {}
const v7 = f2(f1);
try { v7(BigUint64Array); } catch (e) {}
gc();
