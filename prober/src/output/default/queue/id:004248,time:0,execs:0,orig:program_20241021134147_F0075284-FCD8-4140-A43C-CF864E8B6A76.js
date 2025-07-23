function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    class C5 {
        get c() {
            let v7 = !this;
            v7++;
        }
    }
    const v9 = new C5();
    const v12 = new BigUint64Array(586);
    for (const v13 of v12) {
        v9.c;
    }
}
const v15 = new F0(F0, F0, F0);
new F0(F0, F0, v15);
gc();
