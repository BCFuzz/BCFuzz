function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    class C5 {
        get c() {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                a12++;
                this.a = a12;
            }
            new F9(721547599, 2147483647);
        }
    }
    const v15 = new C5();
    const v18 = new BigUint64Array(586);
    for (const v19 of v18) {
        v15.c;
    }
}
new F0(F0, F0, F0);
gc();
