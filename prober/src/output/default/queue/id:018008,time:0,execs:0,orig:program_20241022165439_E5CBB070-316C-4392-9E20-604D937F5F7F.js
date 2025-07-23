for (let v1 = 0; v1 < 25; v1++) {
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const v7 = a5.apply;
        try { v7(); } catch (e) {}
        function f9(a10, a11, a12, a13) {
            for (let i16 = 10, i17 = 10; -13369 < i17; i17--) {
            }
            return a4;
        }
        f9();
    }
    new F2(F2, makeMasquerader);
}
gc();
