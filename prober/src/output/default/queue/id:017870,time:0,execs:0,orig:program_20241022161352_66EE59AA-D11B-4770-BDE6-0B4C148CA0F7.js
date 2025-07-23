for (let v1 = 0; v1 < 5; v1++) {
    function F2(a4, a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        for (let i10 = 8, i11 = 10; i11--, i10 ** i10, 2 < i11;) {
            i10 /= v1;
        }
    }
    new F2(2, F2, 2, 2);
}
gc();
