class C0 {
    get c() {
        const v2 = this.constructor;
        new v2(v2);
    }
}
const v4 = new C0();
const v7 = new BigUint64Array(586);
for (const v8 of v7) {
    v4.c;
}
gc();
