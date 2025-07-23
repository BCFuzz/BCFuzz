class C1 {
    get c() {
        +"f";
    }
}
const v4 = new C1();
const v7 = new BigUint64Array(586);
for (const v8 of v7) {
    v4.c;
}
gc();
