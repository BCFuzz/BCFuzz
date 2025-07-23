function f1() {
    return f1;
}
class C2 extends f1 {
}
function f3() {
    class C5 extends BigInt64Array {
        3398 = 2.220446049250313e-16;
    }
    new C5();
    return 2.220446049250313e-16;
}
C2.toString = f3;
const v7 = new C2();
const t14 = v7.constructor;
const v9 = t14();
const v10 = new C2();
const v11 = v10.constructor;
const v12 = v11();
try { v11(v12, v9, C2); } catch (e) {}
gc();
