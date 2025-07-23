class C1 extends Date {
}
const v2 = new C1();
for (const v4 of v2.toString()) {
    new Date(v4.padEnd(v4));
}
gc();
