for (let v0 = 0; v0 < 100; v0++) {
    function f1(a2, a3, a4) {
        function f5(a6, a7) {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F8(F8, a6, f5);
            return v0;
        }
        return v0;
    }
    f1(v0, v0, f1);
}
gc();
