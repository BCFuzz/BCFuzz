function f1(a2) {
    class C3 {
    }
    C3();
    return f1;
}
BigInt64Array.toString = f1;
class C5 extends BigInt64Array {
}
const v6 = new C5();
try { v6.slice(v6, BigInt64Array); } catch (e) {}
gc();
