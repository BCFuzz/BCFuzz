for (let v0 = 0; v0 < 100; v0++) {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
            const v18 = [BigUint64Array];
            v18[-1] = v18;
        }
    }
    new F1(v0, v0, v0, F1);
}
gc();
