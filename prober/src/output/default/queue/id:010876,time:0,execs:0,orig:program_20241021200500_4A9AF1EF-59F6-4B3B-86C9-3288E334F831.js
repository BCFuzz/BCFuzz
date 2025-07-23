function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    class C5 {
        get c() {
            let v7 = !this;
            const v8 = v7++;
            const v9 = v8 >>> v8;
            let v10 = v9 - v9;
            v10--;
        }
    }
    const v12 = new C5();
    const v15 = new BigUint64Array(586);
    for (const v16 of v15) {
        v12.c;
    }
}
const v18 = new F0();
const v19 = v18.constructor;
new v19(v19, v19, v19);
gc();
