class C1 extends Date {
}
const v2 = new C1();
v2.toLocaleTimeString(v2, Date, C1, Date).isWellFormed();
gc();
