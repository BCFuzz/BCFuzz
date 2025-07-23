for (let v0 = 0; v0 < 5; v0++) {
    function f1(a2, a3, a4) {
        try { a4(a2, v0, f1); } catch (e) {}
        function f6(a7, a8) {
            function F9(a11, a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F9(F9, a7, f6);
            return v0;
        }
        return v0;
    }
    f1(v0, v0, f1);
}
gc();
