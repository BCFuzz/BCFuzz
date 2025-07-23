class C0 {
    get c() {
        const v4 = new Float32Array(15);
        v4["includes"]();
    }
}
const v7 = new C0();
const v10 = new BigUint64Array(586);
for (const v11 of v10) {
    v7.c;
}
gc();
