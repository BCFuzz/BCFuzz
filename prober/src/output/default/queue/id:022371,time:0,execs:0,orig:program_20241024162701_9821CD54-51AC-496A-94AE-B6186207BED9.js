class C2 extends Date {
}
const v3 = new C2();
for (const v5 of v3.toString()) {
    new Date(v5.padEnd(678));
}
gc();
