class C1 extends Date {
}
const v2 = new C1();
v2.toLocaleTimeString().localeCompare(v2);
gc();
