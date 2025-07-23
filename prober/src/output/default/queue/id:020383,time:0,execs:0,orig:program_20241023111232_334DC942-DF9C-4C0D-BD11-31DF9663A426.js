function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    with (a4) {
        class C6 {
            constructor() {
                for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
                    eval();
                }
            }
        }
        new C6();
    }
}
new F1(F1, -48245n);
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
gc();
