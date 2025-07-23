makeMasquerader();
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    class C7 {
        get c() {
            let v9 = !this;
            const v10 = v9++;
            v10 >>> v10;
        }
    }
    const v12 = new C7();
    const v15 = new BigUint64Array(586);
    for (const v16 of v15) {
        v12.c;
    }
}
const v18 = new F2(F2, makeMasquerader, makeMasquerader);
const t17 = v18.constructor;
new t17();
gc();
