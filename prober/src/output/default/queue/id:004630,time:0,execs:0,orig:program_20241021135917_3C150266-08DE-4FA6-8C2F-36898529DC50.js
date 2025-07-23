class C1 extends Date {
}
const v2 = new C1();
const v3 = v2.toLocaleTimeString(Date, Date, v2, v2);
const v4 = new C1();
function f5(a6, a7) {
    new v3();
    return a7;
}
v4.toString = f5;
try { v4.toString(); } catch (e) {}
gc();
