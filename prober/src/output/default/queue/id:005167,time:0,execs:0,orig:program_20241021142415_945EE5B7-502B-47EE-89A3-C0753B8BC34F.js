class C1 extends Date {
}
const v2 = new C1();
class C3 {
}
C3.constructor = Date;
const t6 = C3.constructor;
new t6(v2);
gc();
