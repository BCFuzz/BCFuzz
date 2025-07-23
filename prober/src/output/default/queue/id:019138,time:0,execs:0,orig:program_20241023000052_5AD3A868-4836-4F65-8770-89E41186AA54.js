function f1() {
    return -1933160385n;
}
class C2 extends f1 {
}
const v3 = new C2();
v3.timeZone = -1933160385n;
class C6 extends Date {
}
const v7 = new C6();
try { v7.toLocaleTimeString("object", v3); } catch (e) {}
gc();
