function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    class C5 {
        get c() {
            let v7 = !this;
            const v8 = v7++;
            v8 << v8;
        }
    }
    const v10 = new C5();
    const v13 = new BigUint64Array(586);
    for (const v14 of v13) {
        v14 == v14;
        v10.c;
    }
}
const v17 = new F0();
new F0(F0, F0, v17);
gc();
