class C1 extends WeakMap {
    c;
}
const v2 = new C1();
for (const v3 in v2) {
}
delete v2.c;
gc();
