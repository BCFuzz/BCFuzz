function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    class C5 {
        get c() {
            let v7 = !this;
            const v8 = v7++;
            const v9 = v8 >>> v8;
            v9 - v9;
        }
    }
    const v11 = new C5();
    const v14 = new BigUint64Array(586);
    for (const v15 of v14) {
        v11.c;
    }
}
const v17 = new F0(F0, F0, F0);
new F0(v17, v17, F0);
gc();
