class C1 {
    get c() {
        const v3 = new Float32Array();
        try { v3.findIndex(); } catch (e) {}
    }
}
const v5 = new C1();
const v8 = new BigUint64Array(586);
for (const v9 of v8) {
    v5.c;
}
gc();
